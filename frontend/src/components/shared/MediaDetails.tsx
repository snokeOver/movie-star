"use client";

import { IMedia } from "@/types";

const MediaDetailsSection = ({ media }: { media: IMedia }) => {
  console.log(media);
  return <div>{media.id}</div>;
};

export default MediaDetailsSection;
