import FormService from '../../services/form'
import { ensureAuthenticated } from '../../utils/auth'
import type { QueryResolvers } from './../types.generated'

export const getFormById: NonNullable<QueryResolvers['getFormById']> = async (
  _parent,
  { id },
  _ctx
) => {
  ensureAuthenticated(_ctx)
  return FormService.getFormById(id)
}
