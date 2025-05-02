"use client";
import { PopularCard } from "@/components/shared/core/card/PopularCard";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { useAllMediaQuery } from "@/hooks/queries/useAllMediaQuery";
import { IMedia } from "@/types";
import React from "react";

const ManageMedia = () => {
  const { data: medias, isPending, isError, error } = useAllMediaQuery(); // Call the custom hook

  if (isPending) return <LoadingSection />;
  if (isError) return <div>Error: {error?.message}</div>; // Error state

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full">
      {medias.data.map((media: IMedia) => (
        <PopularCard key={media.id} media={media} />
      ))}
    </div>
  );
};

export default ManageMedia;
