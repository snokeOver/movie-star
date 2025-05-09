"use client";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { WatchlistCard } from "@/components/shared/core/card/WatchlistCard";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { useWatchListMutation } from "@/hooks/mutations/useWatchListMutation";
import { useWatchlistQuery } from "@/hooks/queries/useWatchlistQuery";
import { IWatchListMedia } from "@/types";

import React from "react";

const WatchListPage = () => {
  const { data, isLoading } = useWatchlistQuery(1, 100);
  const { mutate: clearWatchList, isPending } = useWatchListMutation();

  console.log(data);
  if (isLoading) return <LoadingSection />;
  if (!data) return null;
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg font-bold uppercase lg:text-2xl">Watchlist</h1>
        {data.length > 1 && (
          <PrimaryButton
            btnText="Clear Watchlist"
            loadingText="Clearing..."
            isLoading={isPending}
            onClick={() => clearWatchList({})}
            className="w-fit"
          />
        )}
      </div>

      {data.length ? (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
          {data.map((media: IWatchListMedia) => (
            <WatchlistCard key={media.id} media={media} />
          ))}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default WatchListPage;
