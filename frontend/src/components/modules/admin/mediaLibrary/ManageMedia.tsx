"use client";
import { AdminCard } from "@/components/shared/core/card/AdminCard";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { useMediaQuery } from "@/hooks/queries/useMediaQuery";

import { IMedia } from "@/types";
import React from "react";

const ManageMedia = () => {
  const { data: medias, isPending, isError, error } = useMediaQuery();

  if (isPending) return <LoadingSection />;
  if (isError) return <div>Error: {error?.message}</div>; // Error state

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
      {medias.map((media: IMedia) => (
        <AdminCard key={media.id} media={media} />
      ))}
    </div>
  );
};

export default ManageMedia;
