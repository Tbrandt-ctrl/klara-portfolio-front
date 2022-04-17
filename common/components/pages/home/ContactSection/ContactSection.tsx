import Link from "next/link";

import MailIcon from "@/common/icons/MailIcon";
import PhoneIcon from "@/common/icons/PhoneIcon";
import HeartIcon from "@/common/icons/HeartIcon";
import BuildingIcon from "@/common/icons/BuildingIcon";

const ContactSection = () => {
  const socials = [
    {
      icon: <MailIcon />,
      text: "kolocagency@gmail.com",
      link: "mailto:kolocagency@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      text: "+33 (0)7 67 08 53 94",
      link: "",
    },
    {
      icon: <HeartIcon />,
      text: "LinkedIn",
      link: "",
    },
    {
      icon: <BuildingIcon />,
      text: "kolocagency.com",
      link: "https://kolocagency.com",
    },
  ];

  return (
    <section className="fccc h-[80vh] gap-10">
      <div className="fccc gap-4">
        {" "}
        <h1 className="text-center text-4xl font-bold text-main">
          Contact me!
        </h1>
        <p className="text-center text-lg max-w-xs">
          I'm currently working with Gammeo on their GMAO application ! But I'm
          open to chat if you have any questions !{" "}
        </p>
      </div>
      <div className="fccc gap-6">
        {socials.map((social) => {
          return (
            <Link href={social.link}>
              <a className="fccc gap-2">
                {social.icon}
                {social.text}
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
