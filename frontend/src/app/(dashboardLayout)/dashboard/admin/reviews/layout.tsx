import { IChildren } from "@/types";
import React from "react";

const MediaLayout = ({ children }: IChildren) => {
  return <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>;
};

export default MediaLayout;
