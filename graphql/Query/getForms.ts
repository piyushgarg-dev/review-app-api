import FormService from '../../services/form'
import { ensureAuthenticated } from '../../utils/auth'
import type { QueryResolvers } from './../types.generated'

export const getForms: NonNullable<QueryResolvers['getForms']> = async (
  _parent,
  { input },
  _ctx
) => {
  ensureAuthenticated(_ctx)
  return FormService.getFormsByProjectId(input.projectId)
}
