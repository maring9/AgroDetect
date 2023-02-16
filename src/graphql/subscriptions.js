/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateInference = /* GraphQL */ `
  subscription OnCreateInference(
    $filter: ModelSubscriptionInferenceFilterInput
    $owner: String
  ) {
    onCreateInference(filter: $filter, owner: $owner) {
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
export const onUpdateInference = /* GraphQL */ `
  subscription OnUpdateInference(
    $filter: ModelSubscriptionInferenceFilterInput
    $owner: String
  ) {
    onUpdateInference(filter: $filter, owner: $owner) {
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
export const onDeleteInference = /* GraphQL */ `
  subscription OnDeleteInference(
    $filter: ModelSubscriptionInferenceFilterInput
    $owner: String
  ) {
    onDeleteInference(filter: $filter, owner: $owner) {
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
