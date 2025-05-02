import { Loader } from "lucide-react";
import Image from "next/image";
import logoImage from "@/assets/logo.png";

const LoadingSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 text-center">
      <Loader className="animate-spin h-24 w-auto text-theme-400" />
      <Image
        src={logoImage}
        width={1000}
        height={1000}
        className="h-8 w-auto md:h-14 lg:h-20"
        alt="logo"
      />
    </div>
  );
};

export default LoadingSection;
