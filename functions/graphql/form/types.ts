export const types = `#graphql
    input CreateFormData {
        name: String!
        slug: String!
        projectId: String!
    }

    input UpdateFormInput {
        id: ID!

        name: String
        introTitle: String
        introMessage: String
        promptTitle: String
        promptDescription: String

        thankyouTitle: String
        thankyouMessage: String

        enableCTA: Boolean
        ctaTitle: String
        ctaURL: String

        isActive: Boolean

        primaryColor: String
        backgroundColor: String

        lang: String

        collectVideoTestimonials: Boolean
        collectTextTestimonials: Boolean
        collectRatings: Boolean
        collectImages: Boolean
        collectEmail: Boolean
        collectJobTitle: Boolean
        collectUserImage: Boolean
        collectWebsiteURL: Boolean
        collectCompany: Boolean

        autoApproveTestimonials: Boolean
        autoAddTags: [String]
    }

    input GetFormsInput {
        projectId: ID!
    }

    input GetFormBySlugInput {
        formSlug: String!
        customDomain: String
    }
    
    type Form {
        id: ID!
        name: String!
        slug: String!

        introTitle: String!
        introMessage: String

        promptTitle: String!
        promptDescription: String

        thankyouTitle: String!
        thankyouMessage: String

        enableCTA: Boolean!
        ctaTitle: String
        ctaURL: String

        project: Project
        projectId: String!

        createdBy: User
        createdByUserId: String

        isActive: Boolean!

        primaryColor: String!
        backgroundColor: String!

        lang: String!

        collectVideoTestimonials: Boolean!
        collectTextTestimonials: Boolean!
        collectRatings: Boolean!
        collectImages: Boolean!
        collectEmail: Boolean!
        collectJobTitle: Boolean!
        collectUserImage: Boolean!
        collectWebsiteURL: Boolean!
        collectCompany: Boolean!

        autoApproveTestimonials: Boolean!
        autoAddTags: [String]

        createdAt: Date
        updatedAt: Date

    }

    type FormResponse {
        id: ID!

        formId: String!

        name: String!
        email: String
        imageURL: String
        rating: Int
        testimonial: String!
        jobTitle: String
        websiteUrl: String
        company: String

        tags: [String]
        approved: Boolean

        reatedAt: Date
        updatedAt: Date
    }

    input SubmitFormResponseData {
        formId: String!

        name: String!
        email: String
        imageURL: String
        rating: Int
        testimonial: String!
        jobTitle: String
        websiteUrl: String
        company: String
    }

    input GetFormResponsesByFormIdInput {
        formId: ID!
    }
`
