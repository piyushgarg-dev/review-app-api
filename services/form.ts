import prismaClient from '../db'

class FormService {
  public static createForm = prismaClient.form.create

  public static getFormsByProjectId(projectId: string) {
    return prismaClient.form.findMany({ where: { project: { id: projectId } } })
  }

  public static getFormById(id: string) {
    return prismaClient.form.findUnique({ where: { id } })
  }
}

export default FormService
