"use client";
import { PurchaselistCard } from "@/components/shared/core/card/PurchaseCard";
import { WatchlistCard } from "@/components/shared/core/card/WatchlistCard";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { usePurchaseQuery } from "@/hooks/queries/usePurchaseQuery";
import { IPurchaseListMedia } from "@/types";

import React from "react";

const UserPurchasePage = () => {
  const { data, isLoading } = usePurchaseQuery(1, 100);

  console.log(data);
  if (isLoading) return <LoadingSection />;
  if (!data) return null;
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-lg font-bold uppercase lg:text-2xl">Your Purchase</h1>

      {data.length ? (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
          {data.map((media: IPurchaseListMedia) => (
            <PurchaselistCard key={media.id} media={media} />
          ))}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default UserPurchasePage;
