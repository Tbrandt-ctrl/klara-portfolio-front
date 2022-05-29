import Link from "next/link";

import DefaultImage from "@/utils/DefaultImage";

import fr from "@/locales/components/footer/fr";
import en from "@/locales/components/footer/en";

import useLocale from "lib/useLocale";

import { useQuery } from "@apollo/client";
import SOCIAL_QUERY from "@/queries/social";

import Loading from "@/utils/Loading";
import { SocialElement } from "@/types/queries/social";

const Footer = () => {
  const t = useLocale(fr, en);

  const { loading, error, data } = useQuery(SOCIAL_QUERY);

  const socials = data?.social.data.attributes.SocialElement;

  return (
    <footer className="w-100">
      <section className="fccc h-[80vh] gap-10" id="contact">
        {loading ? (
          <Loading />
        ) : error ? (
          <div>`Error! ${error.message}`</div>
        ) : (
          <>
            {" "}
            <div className="fccc gap-4">
              <h1 className="text-center text-4xl font-bold text-main">
                {t.title}
              </h1>
              <p className="text-center text-lg max-w-xs">{t.description}</p>
            </div>
            <div className="fccc md:frcc gap-8">
              {socials?.map((social: SocialElement, index: number) => {
                const icon = social.icon;
                const { url, alternativeText, height, width } =
                  icon.data.attributes;

                return (
                  <>
                    <Link href={social.link} key={index}>
                      <a className="fccc gap-6 relative">
                        <div className="h-10 w-10 relative">
                          <DefaultImage
                            url={url}
                            alternativeText={alternativeText}
                            fill
                          />
                        </div>
                        {social.name}
                      </a>
                    </Link>
                  </>
                );
                /*  /* (social, index)
                 =>   return <>  {/* <Link href={social.link} key={index}>
                      <a className="fccc gap-2">
                        {social.icon}
                        {social.text}
                      </a>
                    </Link> }</> </> */
              })}
            </div>
          </>
        )}
      </section>
    </footer>
  );
};

export default Footer;
