export const queries = `#graphql
    getForms(input: GetFormsInput!): [Form]
    getFormById(id: ID!): Form
    getFormResponsesByFormId(input: GetFormResponsesByFormIdInput!): [FormResponse]
    getFormResponsesByProjectId(input: GetFormResponsesByProjectIdInput!): [FormResponse]
    getPublicFormData(input: GetPublicFormDataInput!): FormPublicData
`
