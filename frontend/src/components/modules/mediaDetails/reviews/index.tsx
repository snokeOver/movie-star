"use client";

import { IMedia } from "@/types";
import Image from "next/image";

import { useUserStore } from "@/stores/auth";

import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { usePublicMediaQuery } from "@/hooks/queries/usePublicMediaQuery";

import ReviewCard from "../review/ReviewCard";
import { useEffect } from "react";

const AllReviewSection = ({ mediaId }: { mediaId: string }) => {
  const { user } = useUserStore();

  const {
    data,
    isLoading: isSingleMediaLoading,
    refetch,
  } = usePublicMediaQuery({
    id: mediaId,
  });

  const media = data as IMedia;

  useEffect(() => {
    if (user?.userId) {
      refetch();
    }
  }, [refetch, user?.userId]);

  if (isSingleMediaLoading) return <LoadingSection />;

  if (!media) return;

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen p-3 md:p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row gap-8 text-white ">
        {/* Poster */}
        <div className="flex items-center gap-6">
          <Image
            src={media.posterUrl}
            alt={media.title}
            width={120}
            height={180}
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col h-full  justify-end">
            <h1 className="text-md text-white/40 font-semibold">
              {media.title}
            </h1>
            <p className="text-2xl font-bold mt-1">User reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="pt-10">
        <div className="grid gap-4  w-full">
          {media && media.reviews && media.reviews.length ? (
            media.reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                isReviewLiked={media.isUserLikedReview}
                user={user}
              />
            ))
          ) : (
            <div className="text-center mt-10 text-primary font-bold text-2xl">
              This media has no reviews! Be the first to give one!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllReviewSection;
