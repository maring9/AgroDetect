/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createInference = /* GraphQL */ `
  mutation CreateInference(
    $input: CreateInferenceInput!
    $condition: ModelInferenceConditionInput
  ) {
    createInference(input: $input, condition: $condition) {
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
export const updateInference = /* GraphQL */ `
  mutation UpdateInference(
    $input: UpdateInferenceInput!
    $condition: ModelInferenceConditionInput
  ) {
    updateInference(input: $input, condition: $condition) {
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
export const deleteInference = /* GraphQL */ `
  mutation DeleteInference(
    $input: DeleteInferenceInput!
    $condition: ModelInferenceConditionInput
  ) {
    deleteInference(input: $input, condition: $condition) {
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
