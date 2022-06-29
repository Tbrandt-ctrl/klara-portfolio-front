import Link from "next/link";

import DefaultImage from "@/utils/DefaultImage";

import fr from "@/locales/components/footer/fr";
import en from "@/locales/components/footer/en";

import useLocale from "lib/useLocale";

import { SocialElement } from "@/types/queries/social";

const Footer = () => {
  const t = useLocale(fr, en);

  return (
    <footer className="w-100">
      <section className="fccc h-[80vh] gap-10" id="contact">
        <>
          {" "}
          <div className="fccc gap-4">
            <h1 className="text-center text-4xl font-bold text-main">
              {t.title}
            </h1>
            <p className="text-center text-lg max-w-xs">{t.description}</p>
          </div>
          <div className="fccc md:frcc gap-8">
            {t.socials.map((social: SocialElement, index: number) => {
              return (
                <>
                  <Link href={social.link} key={index}>
                    <a className="fccc gap-2">
                      {social.icon}
                      {social.text}
                    </a>
                  </Link>
                </>
              );
            })}
          </div>
        </>
      </section>
    </footer>
  );
};

export default Footer;
