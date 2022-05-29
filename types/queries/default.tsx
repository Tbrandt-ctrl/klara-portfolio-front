interface ImageAttributes {
  url: string;
  alternativeText: string;
  height: number;
  width: number;
}

interface ImageData {
  id: string;
  attributes: ImageAttributes;
  __typename: string;
}

interface Image {
  data: ImageData;
}

interface Images {
  id: string;
  __typename: string;
  data: ImageData[];
}

export type { Image, Images, ImageAttributes, ImageData };
