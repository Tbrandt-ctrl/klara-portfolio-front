type UploadFileEntity {
  id: ID
  attributes: UploadFile
}

scalar DateTime

type UploadFile {
  name: String!
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: JSON
  hash: String!
  ext: String
  mime: String!
  size: Float!
  url: String!
  previewUrl: String
  provider: String!
  provider_metadata: JSON
  related: [GenericMorph]
  createdAt: DateTime
  updatedAt: DateTime
}