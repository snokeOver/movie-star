import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import Image from "next/image";
import { ILogo } from "@/types";

const Logo = ({ src }: ILogo) => {
  return (
    <Link href="/">
      {src === "footer" ? (
        <Image src={logoImage} alt="logo" width={130} height={130} />
      ) : (
        <Image src={logoImage} alt="logo" width={60} height={60} />
      )}
    </Link>
  );
};

export default Logo;
