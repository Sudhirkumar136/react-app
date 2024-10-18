/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCarDataModel = /* GraphQL */ `
  query GetCarDataModel($id: ID!) {
    getCarDataModel(id: $id) {
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
export const listCarDataModels = /* GraphQL */ `
  query ListCarDataModels(
    $filter: ModelCarDataModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarDataModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Rent
        Description
        imageURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
