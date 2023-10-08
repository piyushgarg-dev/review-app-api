import prismaClient from '../db'
class ProjectService {
  public static create = prismaClient.project.create

  public static getUserProjects(userId: string) {
    return prismaClient.project.findMany({
      where: { ProjectAccessMapping: { every: { user: { id: userId } } } },
    })
  }

  public static async getProjectByDomain({
    domain,
    userId,
  }: {
    domain: string
    userId: string
  }) {
    const [project] = await prismaClient.project.findMany({
      where: {
        OR: [{ subdomain: domain }, { customDomain: domain }],
        ProjectAccessMapping: { every: { user: { id: userId } } },
      },
    })
    return project
  }
}

export default ProjectService
