import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { IChildren } from "@/types";

const CommonLayout = ({ children }: IChildren) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-[calc(100vh-64px)]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
