/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { Form } from './Form'
import { createForm as Mutation_createForm } from './Mutation/createForm'
import { createProject as Mutation_createProject } from './Mutation/createProject'
import { createUser as Mutation_createUser } from './Mutation/createUser'
import { updateForm as Mutation_updateForm } from './Mutation/updateForm'
import { Project } from './Project'
import { getFormById as Query_getFormById } from './Query/getFormById'
import { getForms as Query_getForms } from './Query/getForms'
import { getProjectByDomain as Query_getProjectByDomain } from './Query/getProjectByDomain'
import { getSessionUser as Query_getSessionUser } from './Query/getSessionUser'
import { getUserProjects as Query_getUserProjects } from './Query/getUserProjects'
import { singinwithEmailPassword as Query_singinwithEmailPassword } from './Query/singinwithEmailPassword'
import { verifyGoogleAuthToken as Query_verifyGoogleAuthToken } from './Query/verifyGoogleAuthToken'
import { User } from './User'
import { DateResolver } from 'graphql-scalars'
export const resolvers: Resolvers = {
  Query: {
    getFormById: Query_getFormById,
    getForms: Query_getForms,
    getProjectByDomain: Query_getProjectByDomain,
    getSessionUser: Query_getSessionUser,
    getUserProjects: Query_getUserProjects,
    singinwithEmailPassword: Query_singinwithEmailPassword,
    verifyGoogleAuthToken: Query_verifyGoogleAuthToken,
  },
  Mutation: {
    createForm: Mutation_createForm,
    createProject: Mutation_createProject,
    createUser: Mutation_createUser,
    updateForm: Mutation_updateForm,
  },

  Form: Form,
  Project: Project,
  User: User,
  Date: DateResolver,
}
