import prismaClient from '../db'

class ProjectService {
  public static create = prismaClient.project.create

  public static getUserProjects(userId: string) {
    return prismaClient.project.findMany({
      where: { ProjectAccessMapping: { every: { user: { id: userId } } } },
    })
  }
}

export default ProjectService
