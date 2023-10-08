import FormService from '../../services/form'
import { ensureAuthenticated } from '../../utils/auth'
import type { MutationResolvers } from './../types.generated'

export const updateForm: NonNullable<MutationResolvers['updateForm']> = async (
  _parent,
  { data },
  _ctx
) => {
  ensureAuthenticated(_ctx)
  await FormService.updateFormById(data.id, data)
  return true
}
