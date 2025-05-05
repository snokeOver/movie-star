import AuthNavbar from "@/components/shared/navbar/AuthNavbar";
import { IChildren } from "@/types";
import bannerImage from "@/assets/banner.jpg";

const AuthLayout = ({ children }: IChildren) => {
  return (
    <div className="relative">
      <AuthNavbar />

      <main
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
        }}
      >
        {/* Dark Overlay to Make Text More Visible */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
        <div className="relative z-20 flex h-screen items-center justify-center mx-2">
          <div className="flex max-w-sm flex-col items-center gap-10 rounded-xl bg-white/20 px-5 py-8 backdrop-blur-md md:max-w-md lg:max-w-xl lg:px-15  xl:max-w-2xl">
            {" "}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
