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

interface CaseStudyHomeAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
  slug: string;
}

interface AttributeCard {
  title: string;
  value: string;
}

interface TextContent {
  content: string;
  id: string;
  title: string;
  __typename: string;
}

interface PostCardContent {
  __typename: string;
  id: string;
  title: string;
  description: string;
  icon: Image;
}

interface PostCards {
  __typename: string;
  id: string;
  PostCard: PostCardContent[];
}

interface Images {
  id: string;
  __typename: string;
  data: ImageData[];
}

interface CarouselContent {
  __typename: string;
  id: string;
  carousel_images: Images;
}

interface SingleMediaContent {
  __typename: string;
  id: string;
  media: Image;
}

interface CaseStudyAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
  AttributeCards: AttributeCard[];
  content: (TextContent | PostCards | CarouselContent)[];
}

interface CaseStudyHome {
  __typename: string;
  id: string;
  attributes: CaseStudyHomeAttributes;
}

interface CaseStudySlug {
  attributes: { slug: string; locale: string };
}

interface CaseStudy {
  __typename: string;
  id: string;
  attributes: CaseStudyAttributes;
}

export type {
  CaseStudyHome,
  CaseStudy,
  CaseStudySlug,
  CaseStudyAttributes,
  TextContent,
  PostCardContent,
  PostCards,
  CarouselContent,
  Images,
  ImageAttributes,
  ImageData,
  SingleMediaContent,
};
