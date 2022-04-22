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

interface CaseStudyHome {
  __typename: string;
  id: string;
  attributes: CaseStudyHomeAttributes;
}

export type { CaseStudyHome };
