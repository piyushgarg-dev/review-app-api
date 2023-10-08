import slugify from 'slugify'
import FormService from '../../services/form'
import { ensureAuthenticated } from '../../utils/auth'
import type { MutationResolvers } from './../types.generated'

export const createForm: NonNullable<MutationResolvers['createForm']> = async (
  _parent,
  { data },
  _ctx
) => {
  ensureAuthenticated(_ctx)
  const { name, slug, projectId } = data
  const form = await FormService.createForm({
    data: {
      name,
      slug: slugify(slug),
      introTitle: 'Share a testimonial!',
      introMessage: `Do you love using our product? We'd love to hear about it! - Share your experience with a quick video or text testimonial - Recording a video? Don't forget to smile 😊`,
      promptTitle: 'Write a testimonial',
      promptDescription: `- What do you like most about us?\n- Would you recommend us to a friend?`,
      thankyouTitle: 'Thank you 🙏',
      thankyouMessage:
        'Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',
      autoApproveTestimonials: false,
      autoAddTags: [],
      primaryColor: '#8B41F2',
      backgroundColor: '#FFFFFF',
      project: { connect: { id: projectId } },
      createdBy: { connect: { id: _ctx.user?.id! } },
    },
  })
  return form.id

}
