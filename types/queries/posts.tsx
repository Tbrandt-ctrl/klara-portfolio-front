interface ImageAttributes {
  url: string;
  alternativeText: string;
}

interface ImageData {
  id: string;
  attributes: ImageAttributes;
}

interface Image {
  data: ImageData;
}

interface PostHomeAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
}

interface PostHome {
  __typename: string;
  id: string;
  attributes: PostHomeAttributes;
}

export type { PostHome };
