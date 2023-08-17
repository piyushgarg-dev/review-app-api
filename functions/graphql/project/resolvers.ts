import ProjectService from '../../../services/project'
import { ensureAuthenticated } from '../../../utils/auth'
import { ServerContext } from '../interfaces'
import { CreateProjectData } from './interfaces'

const queries = {
  getUserProjects: (_: any, data: any, ctx: ServerContext) => {
    ensureAuthenticated(ctx)
    return ProjectService.getUserProjects(ctx.user?.id!)
  },
}
const mutations = {
  createProject: async (
    _: any,
    { data }: { data: CreateProjectData },
    ctx: ServerContext
  ) => {
    ensureAuthenticated(ctx)
    const project = await ProjectService.create({
      data: {
        name: data.name,
        slug: data.slug,
        ProjectAccessMapping: {
          create: {
            role: 'OWNER',
            user: {
              connect: {
                id: ctx.user?.id!,
              },
            },
          },
        },
      },
    })
    return project
  },
}

export const resolvers = { queries, mutations }
