import { LayoutProps } from "@/types/common/utils/Layout";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="px-6 w-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
