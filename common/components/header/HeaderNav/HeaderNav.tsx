import { DisplayProps } from "@/types/common/header/Header";

import Link from "next/link";

import fr from "@/locales/components/header/fr";
import en from "@/locales/components/header/en";
import useLocale from "lib/useLocale";

const HeaderNav = ({ displayMenu, setDisplayMenu }: DisplayProps) => {
  const t = useLocale(fr, en);

  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div
        className={`text-sm lg:flex lg:flex-grow lg:justify-end items-center font-bold ${
          displayMenu && "hidden"
        }`}
      >
        {t.nav_items &&
          t.nav_items.map(
            (item: { title: string; link: string }, index: number) => {
              return (
                <Link key={index} href={item.link}>
                  <a
                    className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                      index === t.nav_items.length - 1 &&
                      "lg: bg-main border rounded-2xl text-white px-3 py-2"
                    }`}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            }
          )}
      </div>
    </div>
  );
};

export default HeaderNav;
