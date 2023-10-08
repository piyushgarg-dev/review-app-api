import prismaClient from '../db'
import AccessDeniedError from '../errors/AccessDeniedError'
import { UpdateFormData } from '../functions/graphql/form/interfaces'
import { ServerContext } from '../functions/graphql/interfaces'

class FormService {
  public static createForm = prismaClient.form.create

  public static getFormsByProjectId(projectId: string) {
    return prismaClient.form.findMany({ where: { project: { id: projectId } } })
  }

  public static getFormById(id: string) {
    return prismaClient.form.findUnique({ where: { id } })
  }

  public static getFormBySlug(slug: string, customDomain?: string) {
    return prismaClient.form.findUnique({
      where: { slug, project: { customDomain: customDomain } },
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
