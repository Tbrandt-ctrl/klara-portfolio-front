import { DisplayProps } from "@/types/common/header/Header";

import Link from "next/link";

import fr from "@/locales/components/header/fr";
import en from "@/locales/components/header/en";
import useLocale from "lib/useLocale";

import { useQuery } from "@apollo/client";
import ASSET_QUERY from "@/queries/asset";

import { useRouter } from "next/router";
import Loading from "@/utils/Loading";

const HeaderNav = ({ displayMenu, setDisplayMenu }: DisplayProps) => {
  const t = useLocale(fr, en);

  const router = useRouter();

  const { locale } = router;
  const name = locale === "en" ? "CV-ENG" : "CV-FR";

  const { loading, error, data } = useQuery(ASSET_QUERY, {
    variables: { name: name },
  });

  console.log(data);

  const asset =
    !loading &&
    !error &&
    data.attributes &&
    data.asset.data.attributes?.File[0];
  const url =
    !loading && !error && data.attributes && asset.file.data.attributes.url;

  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div
        className={`text-sm lg:flex lg:flex-grow lg:justify-end items-center font-bold ${
          displayMenu && "hidden"
        }`}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <div>`Error! ${error.message}`</div>
        ) : (
          <>
            {t.nav_items &&
              data &&
              t.nav_items.map(
                (item: { title: string; link: string }, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={index === 1 && url ? url : item.link}
                    >
                      <a
                        target={`${index === 1 ? "_blank" : ""}`}
                        className={`block mt-4 lg:inline-block lg:mt-0 mr-6 text-lg hover:underline ${
                          index === t.nav_items.length - 1 &&
                          "lg: bg-main border rounded-2xl text-white px-4 py-2"
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  );
                }
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
