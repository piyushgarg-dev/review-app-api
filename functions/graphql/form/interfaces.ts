export interface CreateFormData {
  name: string
  slug: string
  projectId: string
}

export interface GetFormsInput {
  projectId: string
}

export interface UpdateFormData {
  id: string

  name?: string
  introTitle?: string
  introMessage?: string
  promptTitle?: string
  promptDescription?: string

  thankyouTitle?: string
  thankyouMessage?: string

  enableCTA?: boolean
  ctaTitle?: string
  ctaURL?: string

  isActive?: boolean

  primaryColor?: string
  backgroundColor?: string

  lang?: string

  collectVideoTestimonials?: boolean
  collectTextTestimonials?: boolean
  collectRatings?: boolean
  collectImages?: boolean
  collectEmail?: boolean
  collectJobTitle?: boolean
  collectUserImage?: boolean
  collectWebsiteURL?: boolean
  collectCompany?: boolean

  autoApproveTestimonials?: boolean
  autoAddTags?: [string]
}

export interface SubmitFormResponseData {
  id: string
  formId: string
  name: string
  email?: string
  imageURL?: string
  rating?: number
  testimonial: string
  jobTitle?: string
  websiteUrl?: string
  company?: string
}

export interface GetFormResponsesByFormIdInput {
  formId: string
}

export interface GetFormBySlugInput {
  formSlug: string
  customDomain?: string
}
