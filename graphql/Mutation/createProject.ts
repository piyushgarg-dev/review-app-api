import ProjectService from '../../services/project'
import { ensureAuthenticated } from '../../utils/auth'
import type { MutationResolvers } from './../types.generated'

export const createProject: NonNullable<
  MutationResolvers['createProject']
> = async (_parent, { data }, _ctx) => {

  ensureAuthenticated(_ctx)
  const project = await ProjectService.create({
    data: {
      name: data.name,
      customDomain: data.customDomain,
      subdomain: data.subdomain,
      ProjectAccessMapping: {
        create: {
          role: 'OWNER',
          user: {
            connect: {
              id: _ctx.user?.id!,
            },
          },
        },
      },
    },
  })
  return project
}
