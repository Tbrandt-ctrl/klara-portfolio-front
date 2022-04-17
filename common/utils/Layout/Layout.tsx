import { LayoutProps } from "@/types/common/utils/Layout";

import Header from "@/components/header/Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
