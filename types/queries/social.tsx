import { Image, Images, ImageAttributes, ImageData } from "./default";

interface SocialElement {
  id: string;
  text: string;
  link: string;
  icon: any;
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
