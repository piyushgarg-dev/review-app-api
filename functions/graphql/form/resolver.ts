import slugify from 'slugify'
import FormService from '../../../services/form'
import { ensureAuthenticated } from '../../../utils/auth'
import { ServerContext } from '../interfaces'
import { CreateFormData, GetFormsInput, UpdateFormData } from './interfaces'

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
}

export const resolvers = { queries, mutations }
