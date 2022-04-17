import { useState } from "react";

import { DisplayProps } from "@/types/common/header/Header";

import HeaderBurger from "../HeaderBurger/HeaderBurger";
import HeaderLogo from "../HeaderLogo";
import HeaderNav from "../HeaderNav";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  const displayProps: DisplayProps = {
    displayMenu,
    setDisplayMenu,
  };

  return (
    <header className="w-[100vw] fixed z-20 top-0 left-0">
      <nav className="flex items-center justify-between flex-wrap  p-6">
        <HeaderLogo />
        <HeaderBurger {...displayProps} />
        <HeaderNav {...displayProps} />
      </nav>
    </header>
  );
};

export default Header;
