/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCarDataModel = /* GraphQL */ `
  mutation CreateCarDataModel(
    $input: CreateCarDataModelInput!
    $condition: ModelCarDataModelConditionInput
  ) {
    createCarDataModel(input: $input, condition: $condition) {
      id
      Name
      Rent
      Description
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCarDataModel = /* GraphQL */ `
  mutation UpdateCarDataModel(
    $input: UpdateCarDataModelInput!
    $condition: ModelCarDataModelConditionInput
  ) {
    updateCarDataModel(input: $input, condition: $condition) {
      id
      Name
      Rent
      Description
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCarDataModel = /* GraphQL */ `
  mutation DeleteCarDataModel(
    $input: DeleteCarDataModelInput!
    $condition: ModelCarDataModelConditionInput
  ) {
    deleteCarDataModel(input: $input, condition: $condition) {
      id
      Name
      Rent
      Description
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
