import { DisplayProps } from "@/types/common/header/Header";

import Link from "next/link";

const HeaderNav = ({ displayMenu, setDisplayMenu }: DisplayProps) => {
  const menu_items = ["Case study", "Download CV", "Contact"];

  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div
        className={`text-sm lg:flex lg:flex-grow lg:justify-end items-center font-bold ${
          displayMenu && "hidden"
        }`}
      >
        {menu_items.map((item, index) => {
          return (
            <Link href="./">
              <a
                className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                  index === menu_items.length - 1 &&
                  "lg: bg-main border rounded-2xl text-white px-3 py-2"
                }`}
              >
                {item}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderNav;
