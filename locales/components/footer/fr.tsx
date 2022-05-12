import MailIcon from "@/common/icons/MailIcon";
import PhoneIcon from "@/common/icons/PhoneIcon";
import HeartIcon from "@/common/icons/HeartIcon";
import BuildingIcon from "@/common/icons/BuildingIcon";

export default {
  title: "Contact Me!",
  description:
    "I'm currently working with Gammeo on their GMAO application ! But I'm open to chat if you have any questions !",
  socials: [
    {
      icon: <MailIcon />,
      text: "kolocagency@gmail.com",
      link: "mailto:kolocagency@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      text: "+33 (0)7 67 08 53 94",
      link: "/",
    },
    {
      icon: <HeartIcon />,
      text: "LinkedIn",
      link: "/",
    },
    {
      icon: <BuildingIcon />,
      text: "kolocagency.com",
      link: "https://kolocagency.com",
    },
  ],
};
