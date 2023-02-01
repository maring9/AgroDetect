/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      account_type
      inference_requests {
        items {
          id
          s3_image_path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInference_requestsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        account_type
        inference_requests {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        account_type
        inference_requests {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getInference = /* GraphQL */ `
  query GetInference($id: ID!) {
    getInference(id: $id) {
      id
      s3_image_path
      run_by_user {
        id
        name
        email
        account_type
        inference_requests {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInference_requestsId
      owner
    }
  }
`;
export const listInferences = /* GraphQL */ `
  query ListInferences(
    $filter: ModelInferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        s3_image_path
        run_by_user {
          id
          name
          email
          account_type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInference_requestsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInferences = /* GraphQL */ `
  query SyncInferences(
    $filter: ModelInferenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        s3_image_path
        run_by_user {
          id
          name
          email
          account_type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInference_requestsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
