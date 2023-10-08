import ProjectService from '../../services/project'
import { ensureAuthenticated } from '../../utils/auth'
import type { QueryResolvers } from './../types.generated'

export const getProjectByDomain: NonNullable<
  QueryResolvers['getProjectByDomain']
> = async (_parent, { domain }, _ctx) => {
  ensureAuthenticated(_ctx)
  const project = await ProjectService.getProjectByDomain({
    domain,
    userId: _ctx.user?.id!,
  })
  return project
}
