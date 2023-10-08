import ProjectService from '../../services/project'
import { ensureAuthenticated } from '../../utils/auth'
import type { QueryResolvers } from './../types.generated'

export const getUserProjects: NonNullable<
  QueryResolvers['getUserProjects']
> = async (_parent, _arg, _ctx) => {
  ensureAuthenticated(_ctx)
  return ProjectService.getUserProjects(_ctx.user?.id!)

}
