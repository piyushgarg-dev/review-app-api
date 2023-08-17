import prismaClient from '../db'

class ProjectService {
  public static create = prismaClient.project.create

  public static getUserProjects(userId: string) {
    return prismaClient.project.findMany({
      where: { ProjectAccessMapping: { every: { user: { id: userId } } } },
    })
  }

  public static getProjectBySlug({
    slug,
    userId,
  }: {
    slug: string
    userId: string
  }) {
    return prismaClient.project.findUnique({
      where: {
        slug,
        ProjectAccessMapping: { every: { user: { id: userId } } },
      },
    })
  }
}

export default ProjectService
