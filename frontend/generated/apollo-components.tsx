import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  signup: AuthPayload,
  login: AuthPayload,
};


export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  users: Array<User>,
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum Role {
  Admin = 'Admin',
  User = 'User'
}

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  role: Role,
};

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
);

export type SignupUserMutationMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignupUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & { user: (
      { __typename?: 'User' }
      & UserFragmentFragment
    ) }
  ) }
);

export type UsersQueryQueryVariables = {};


export type UsersQueryQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
}
    `;
export const SignupUserMutationDocument = gql`
    mutation signupUserMutation($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignupUserMutationMutationFn = ApolloReactCommon.MutationFunction<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export type SignupUserMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupUserMutationMutation, SignupUserMutationMutationVariables>, 'mutation'>;

    export const SignupUserMutationComponent = (props: SignupUserMutationComponentProps) => (
      <ApolloReactComponents.Mutation<SignupUserMutationMutation, SignupUserMutationMutationVariables> mutation={SignupUserMutationDocument} {...props} />
    );
    
export type SignupUserMutationMutationResult = ApolloReactCommon.MutationResult<SignupUserMutationMutation>;
export type SignupUserMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export const UsersQueryDocument = gql`
    query usersQuery {
  users {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UsersQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQueryQuery, UsersQueryQueryVariables>, 'query'>;

    export const UsersQueryComponent = (props: UsersQueryComponentProps) => (
      <ApolloReactComponents.Query<UsersQueryQuery, UsersQueryQueryVariables> query={UsersQueryDocument} {...props} />
    );
    
export type UsersQueryQueryResult = ApolloReactCommon.QueryResult<UsersQueryQuery, UsersQueryQueryVariables>;