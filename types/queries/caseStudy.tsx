import { Image, Images, ImageAttributes, ImageData } from "./default";

interface CaseStudyFilteredAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
  page_thumbnail: Image;
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

interface CaseStudyButtonContent {
  __typename: string;
  id: string;
  content: string;
  link: string;
}

interface CaseStudyAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
  page_thumbnail: Image;
  AttributeCards: AttributeCard[];
  content: (
    | TextContent
    | PostCards
    | CarouselContent
    | SingleMediaContent
    | CaseStudyButtonContent
  )[];
}

interface CaseStudyFiltered {
  __typename: string;
  id: string;
  attributes: CaseStudyFilteredAttributes;
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
  CaseStudyFiltered,
  CaseStudy,
  CaseStudySlug,
  CaseStudyAttributes,
  TextContent,
  PostCardContent,
  PostCards,
  CarouselContent,
  SingleMediaContent,
  CaseStudyButtonContent,
};
