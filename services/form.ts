import prismaClient from '../db'

class FormService {
  public static createForm = prismaClient.form.create

  public static getFormsByProjectId(projectId: string) {
    return prismaClient.form.findMany({ where: { project: { id: projectId } } })
  }
}

export default FormService
