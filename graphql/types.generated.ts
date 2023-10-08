import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: Date | string; output: Date | string }
}

export type CreateFormData = {
  name: Scalars['String']['input']
  projectId: Scalars['String']['input']
  slug: Scalars['String']['input']
}

export type CreateProjectData = {
  customDomain?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  subdomain: Scalars['String']['input']
}

export type CreateUserData = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type Form = {
  __typename?: 'Form'
  autoAddTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  autoApproveTestimonials: Scalars['Boolean']['output']
  backgroundColor: Scalars['String']['output']
  collectCompany: Scalars['Boolean']['output']
  collectEmail: Scalars['Boolean']['output']
  collectImages: Scalars['Boolean']['output']
  collectJobTitle: Scalars['Boolean']['output']
  collectRatings: Scalars['Boolean']['output']
  collectTextTestimonials: Scalars['Boolean']['output']
  collectUserImage: Scalars['Boolean']['output']
  collectVideoTestimonials: Scalars['Boolean']['output']
  collectWebsiteURL: Scalars['Boolean']['output']
  createdAt?: Maybe<Scalars['Date']['output']>
  createdBy?: Maybe<User>
  createdByUserId?: Maybe<Scalars['String']['output']>
  ctaTitle?: Maybe<Scalars['String']['output']>
  ctaURL?: Maybe<Scalars['String']['output']>
  enableCTA: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  introMessage?: Maybe<Scalars['String']['output']>
  introTitle: Scalars['String']['output']
  isActive: Scalars['Boolean']['output']
  lang: Scalars['String']['output']
  name: Scalars['String']['output']
  primaryColor: Scalars['String']['output']
  project?: Maybe<Project>
  projectId: Scalars['String']['output']
  promptDescription?: Maybe<Scalars['String']['output']>
  promptTitle: Scalars['String']['output']
  slug: Scalars['String']['output']
  thankyouMessage?: Maybe<Scalars['String']['output']>
  thankyouTitle: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['Date']['output']>
}

export type GetFormsInput = {
  projectId: Scalars['ID']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createForm?: Maybe<Scalars['String']['output']>
  createProject?: Maybe<Project>
  createUser?: Maybe<User>
  updateForm?: Maybe<Scalars['Boolean']['output']>
}

export type MutationCreateFormArgs = {
  data: CreateFormData
}

export type MutationCreateProjectArgs = {
  data: CreateProjectData
}

export type MutationCreateUserArgs = {
  data: CreateUserData
}

export type MutationUpdateFormArgs = {
  data: UpdateFormInput
}

export type Project = {
  __typename?: 'Project'
  createdAt?: Maybe<Scalars['Date']['output']>
  customDomain?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  subdomain: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['Date']['output']>
}

export type Query = {
  __typename?: 'Query'
  getFormById?: Maybe<Form>
  getForms?: Maybe<Array<Maybe<Form>>>
  getProjectByDomain?: Maybe<Project>
  getSessionUser?: Maybe<User>
  getUserProjects?: Maybe<Array<Maybe<Project>>>
  singinwithEmailPassword?: Maybe<Scalars['String']['output']>
  verifyGoogleAuthToken?: Maybe<Scalars['String']['output']>
}

export type QueryGetFormByIdArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetFormsArgs = {
  input: GetFormsInput
}

export type QueryGetProjectByDomainArgs = {
  domain: Scalars['String']['input']
}

export type QuerySinginwithEmailPasswordArgs = {
  email: Scalars['String']['input']
  password?: InputMaybe<Scalars['String']['input']>
}

export type QueryVerifyGoogleAuthTokenArgs = {
  googleToken: Scalars['String']['input']
}

export type UpdateFormInput = {
  autoAddTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  autoApproveTestimonials?: InputMaybe<Scalars['Boolean']['input']>
  backgroundColor?: InputMaybe<Scalars['String']['input']>
  collectCompany?: InputMaybe<Scalars['Boolean']['input']>
  collectEmail?: InputMaybe<Scalars['Boolean']['input']>
  collectImages?: InputMaybe<Scalars['Boolean']['input']>
  collectJobTitle?: InputMaybe<Scalars['Boolean']['input']>
  collectRatings?: InputMaybe<Scalars['Boolean']['input']>
  collectTextTestimonials?: InputMaybe<Scalars['Boolean']['input']>
  collectUserImage?: InputMaybe<Scalars['Boolean']['input']>
  collectVideoTestimonials?: InputMaybe<Scalars['Boolean']['input']>
  collectWebsiteURL?: InputMaybe<Scalars['Boolean']['input']>
  ctaTitle?: InputMaybe<Scalars['String']['input']>
  ctaURL?: InputMaybe<Scalars['String']['input']>
  enableCTA?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  introMessage?: InputMaybe<Scalars['String']['input']>
  introTitle?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  lang?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  primaryColor?: InputMaybe<Scalars['String']['input']>
  promptDescription?: InputMaybe<Scalars['String']['input']>
  promptTitle?: InputMaybe<Scalars['String']['input']>
  thankyouMessage?: InputMaybe<Scalars['String']['input']>
  thankyouTitle?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  authenticationType?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['Date']['output']>
  email: Scalars['String']['output']
  emailVerified: Scalars['Boolean']['output']
  firstName: Scalars['String']['output']
  id: Scalars['ID']['output']
  lastName?: Maybe<Scalars['String']['output']>
  profileImageURL?: Maybe<Scalars['String']['output']>
  role?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['Date']['output']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateFormData: CreateFormData
  String: ResolverTypeWrapper<Scalars['String']['output']>
  CreateProjectData: CreateProjectData
  CreateUserData: CreateUserData
  Date: ResolverTypeWrapper<Scalars['Date']['output']>
  Form: ResolverTypeWrapper<Form>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  GetFormsInput: GetFormsInput
  Mutation: ResolverTypeWrapper<{}>
  Project: ResolverTypeWrapper<Project>
  Query: ResolverTypeWrapper<{}>
  UpdateFormInput: UpdateFormInput
  User: ResolverTypeWrapper<User>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateFormData: CreateFormData
  String: Scalars['String']['output']
  CreateProjectData: CreateProjectData
  CreateUserData: CreateUserData
  Date: Scalars['Date']['output']
  Form: Form
  Boolean: Scalars['Boolean']['output']
  ID: Scalars['ID']['output']
  GetFormsInput: GetFormsInput
  Mutation: {}
  Project: Project
  Query: {}
  UpdateFormInput: UpdateFormInput
  User: User
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type FormResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Form'] = ResolversParentTypes['Form'],
> = {
  autoAddTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  autoApproveTestimonials?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  backgroundColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  collectCompany?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectImages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectJobTitle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectRatings?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectTextTestimonials?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectUserImage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectVideoTestimonials?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  collectWebsiteURL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  createdByUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ctaTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ctaURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  enableCTA?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  introMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  introTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  primaryColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  promptDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  promptTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  thankyouMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  thankyouTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createForm?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFormArgs, 'data'>
  >
  createProject?: Resolver<
    Maybe<ResolversTypes['Project']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProjectArgs, 'data'>
  >
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >
  updateForm?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFormArgs, 'data'>
  >
}

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project'],
> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  customDomain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subdomain?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  getFormById?: Resolver<
    Maybe<ResolversTypes['Form']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFormByIdArgs, 'id'>
  >
  getForms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Form']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFormsArgs, 'input'>
  >
  getProjectByDomain?: Resolver<
    Maybe<ResolversTypes['Project']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetProjectByDomainArgs, 'domain'>
  >
  getSessionUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  getUserProjects?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Project']>>>,
    ParentType,
    ContextType
  >
  singinwithEmailPassword?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QuerySinginwithEmailPasswordArgs, 'email'>
  >
  verifyGoogleAuthToken?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QueryVerifyGoogleAuthTokenArgs, 'googleToken'>
  >
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  authenticationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  profileImageURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType
  Form?: FormResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Project?: ProjectResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
}
