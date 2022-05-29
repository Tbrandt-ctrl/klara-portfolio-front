import { Image, Images, ImageAttributes, ImageData } from "./default";

interface SocialElement {
  id: string;
  name: string;
  link: string;
  icon: Image;
}

interface SocialAttributes {
  SocialElement: SocialElement[];
}

interface SocialData {
  id: string;
  attributes: SocialAttributes;
}

interface Social {
  data: SocialData;
}

export type { Social, SocialAttributes, SocialElement };
