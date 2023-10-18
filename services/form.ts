import prismaClient from '../db'
import AccessDeniedError from '../errors/AccessDeniedError'
import { UpdateFormData } from '../functions/graphql/form/interfaces'
import { ServerContext } from '../functions/graphql/interfaces'

interface GetFormResponsesByProjectIdOptions {
  itemsPerPage?: number
  cursor?: string
}

class FormService {
  public static createForm = prismaClient.form.create

  public static getFormsByProjectId(projectId: string) {
    return prismaClient.form.findMany({ where: { project: { id: projectId } } })
  }

  public static getFormById(id: string) {
    return prismaClient.form.findUnique({ where: { id } })
  }

  public static getPublicFormData({
    domain,
    slug,
  }: {
    domain: string
    slug: string
  }) {
    return prismaClient.form.findFirst({
      where: {
        AND: [
          {
            project: { OR: [{ subdomain: domain }, { customDomain: domain }] },
          },
          { slug },
        ],
      },
      select: {
        backgroundColor: true,
        collectCompany: true,
        collectEmail: true,
        collectImages: true,
        collectJobTitle: true,
        collectRatings: true,
        collectUserImage: true,
        collectTextTestimonials: true,
        collectVideoTestimonials: true,
        collectWebsiteURL: true,
        ctaTitle: true,
        enableCTA: true,
        ctaURL: true,
        introMessage: true,
        introTitle: true,
        name: true,
        primaryColor: true,
        promptDescription: true,
        promptTitle: true,
        thankyouMessage: true,
        thankyouTitle: true,
      },
    })
  }

  public static updateFormById(id: string, formData: UpdateFormData) {
    return prismaClient.form.update({
      data: {
        ...formData,
        // Excude following fields from getting updated
        slug: undefined,
        createdBy: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        project: undefined,
        id: undefined,
      },
      where: { id },
    })
  }

  public static createFormResponse = prismaClient.formResponse.create

  public static getFormResponsesByProjectId(
    projectId: string,
    ctx: ServerContext,
    options?: GetFormResponsesByProjectIdOptions
  ) {
    if (!ctx.user?.id) throw new AccessDeniedError()

    return prismaClient.formResponse.findMany({
      where: {
        form: {
          project: {
            id: projectId,
            ProjectAccessMapping: { every: { user: { id: ctx.user.id } } }, // TODO: Need to test more deeply
          },
        },
      },
      cursor: options?.cursor
        ? {
            id: options?.cursor,
          }
        : undefined,
      take: options?.itemsPerPage ?? 10,
      skip: 1, // Skip the cursor
      orderBy: { createdAt: 'desc' },
    })
  }

  public static getFormResponsesByFormId(formId: string, ctx: ServerContext) {
    if (!ctx.user?.id) throw new AccessDeniedError()

    return prismaClient.formResponse.findMany({
      where: {
        AND: [
          {
            form: {
              id: formId,
              project: {
                ProjectAccessMapping: { every: { user: { id: ctx.user.id } } }, // TODO: Need to test more deeply
              },
            },
          },
        ],
      },
    })
  }
}

export default FormService
