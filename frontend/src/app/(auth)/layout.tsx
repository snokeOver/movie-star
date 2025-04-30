import AuthNavbar from "@/components/shared/navbar/AuthNavbar";
import { IChildren } from "@/types";

const AuthLayout = ({ children }: IChildren) => {
  return (
    <div className="relative">
      <AuthNavbar />

      <main
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/474623544_1144155600832354_5452196996180225073_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hY8jzp6APsoQ7kNvwFYwldI&_nc_oc=Adnny5YcVpdxQpKpkivRAf0aotzWUJd15LT6wpGL3beeYZ2rVQy-bKNOvHJp3e0xZcc&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=JwH2923xwS1OgQdAUM3dvg&oh=00_AfGncZcpr9N73v9OUM4cS2dlqIpTqYNws46rx9MDk8SDgA&oe=6816C142')",
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
