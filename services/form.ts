import prismaClient from '../db'
import { UpdateFormInput } from '../graphql/types.generated'

class FormService {
  public static createForm = prismaClient.form.create

  public static getFormsByProjectId(projectId: string) {
    return prismaClient.form.findMany({ where: { project: { id: projectId } } })
  }

  public static getFormById(id: string) {
    return prismaClient.form.findUnique({ where: { id } })
  }

  public static updateFormById(id: string, formData: UpdateFormInput) {
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
}

export default FormService
