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

interface CaseStudyHomeAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
}

interface TextParagraph {
  id: string;
  title: string;
  content: string;
}

interface CaseStudyAttributes {
  __typename: string;
  title: string;
  short_description: string;
  thumbnail: Image;
}

interface CaseStudyHome {
  __typename: string;
  id: string;
  attributes: CaseStudyHomeAttributes;
}

interface CaseStudy {
  __typename: string;
  id: string;
  attributes: CaseStudyAttributes;
}

export type { CaseStudyHome, CaseStudy };
