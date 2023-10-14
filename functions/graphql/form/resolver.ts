import slugify from 'slugify'
import FormService from '../../../services/form'
import { ensureAuthenticated } from '../../../utils/auth'
import { ServerContext } from '../interfaces'
import {
  CreateFormData,
  GetFormBySlugInput,
  GetFormResponsesByFormIdInput,
  GetFormsInput,
  SubmitFormResponseData,
  UpdateFormData,
} from './interfaces'
import BadRequestError from '../../../errors/BadRequestError'
import prismaClient from '../../../db'

const queries = {
  getForms: async (
    _: any,
    { input }: { input: GetFormsInput },
    ctx: ServerContext
  ) => {
    ensureAuthenticated(ctx)
    return FormService.getFormsByProjectId(input.projectId)
  },
  getFormById: async (_: any, { id }: { id: string }, ctx: ServerContext) => {
    ensureAuthenticated(ctx)
    return FormService.getFormById(id)
  },
  getFormBySlug: async (
    _: any,
    { input }: { input: GetFormBySlugInput },
    ctx: ServerContext
  ) => {
    // Check if form exist with given id
    const { formSlug, customDomain } = input
    const form = await FormService.getFormBySlug(formSlug, customDomain)
    if (!form || !form.id) {
      throw new BadRequestError(
        `Form with this url ${formSlug} does not exists`
      )
    }

    return form
  },
  getFormResponses: async (
    _: any,
    { input }: { input: GetFormResponsesByFormIdInput },
    ctx: ServerContext
  ) => {
    ensureAuthenticated(ctx)
    return FormService.getFormResponsesByFormId(input.formId, ctx)
  },
}

const mutations = {
  createForm: async (
    _: any,
    { data }: { data: CreateFormData },
    ctx: ServerContext
  ) => {
    ensureAuthenticated(ctx)
    const { name, slug, projectId } = data
    const form = await FormService.createForm({
      data: {
        name,
        slug: slugify(slug),
        introTitle: 'Share a testimonial!',
        introMessage: `Do you love using our product? We'd love to hear about it! - Share your experience with a quick video or text testimonial - Recording a video? Don't forget to smile 😊`,
        promptTitle: 'Write a testimonial',
        promptDescription: `- What do you like most about us?\n- Would you recommend us to a friend?`,
        thankyouTitle: 'Thank you 🙏',
        thankyouMessage:
          'Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',
        autoApproveTestimonials: false,
        autoAddTags: [],
        primaryColor: '#8B41F2',
        backgroundColor: '#FFFFFF',
        createdBy: { connect: { id: ctx.user?.id! } },
        project: { connect: { id: projectId } },
      },
    })
    return form.id
  },
  updateForm: async (
    _: any,
    { data }: { data: UpdateFormData },
    ctx: ServerContext
  ) => {
    ensureAuthenticated(ctx)
    await FormService.updateFormById(data.id, data)
    return true
  },

  submitFormResponse: async (
    _: any,
    { data }: { data: SubmitFormResponseData },
    ctx: ServerContext
  ) => {
    const { formId } = data

    //Check if form exist with given id
    const form = await prismaClient.form.findUnique({
      where: { id: formId },
      select: { id: true, autoAddTags: true, autoApproveTestimonials: true },
    })

    if (!form || !form.id) {
      throw new BadRequestError(`Form with id ${formId} does not exists`)
    }

    const formResponse = await FormService.createFormResponse({
      data: {
        //required field
        name: data.name,
        form: { connect: { id: formId } },
        testimonial: data.testimonial,

        email: data.email,
        imageURL: data.imageURL,
        rating: data.rating,
        jobTitle: data.jobTitle,
        websiteUrl: data.websiteUrl,
        company: data.company,

        approved: Boolean(form.autoApproveTestimonials),
        tags: form.autoAddTags,
      },
    })
    return formResponse.id
  },
}

export const resolvers = { queries, mutations }
