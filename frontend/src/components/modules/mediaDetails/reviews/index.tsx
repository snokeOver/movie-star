"use client";

import { IPageReview } from "@/types";
import Image from "next/image";

import { useUserStore } from "@/stores/auth";

import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";

import ReviewCard from "../review/ReviewCard";
import { useEffect, useState } from "react";
import { usePublicReviewQuery } from "@/hooks/queries/usePublicReviewQuery";
import { ReviewPagination } from "./ReviePagination";

const AllReviewSection = ({ mediaId }: { mediaId: string }) => {
  const { user } = useUserStore();
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading: isSingleMediaLoading,
    refetch,
  } = usePublicReviewQuery({
    movieSeriesId: mediaId,
    page,
    limit: 1,
  });

  const pageReview = data as IPageReview;

  useEffect(() => {
    if (user?.userId) {
      refetch();
    }
  }, [refetch, user?.userId]);

  if (isSingleMediaLoading) return <LoadingSection />;

  if (!pageReview.success) return;
  const { posterUrl, title } = pageReview.data.foundMedia;
  const media = pageReview.data;
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen p-3 md:p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row gap-8 text-white ">
        {/* Poster */}
        <div className="flex items-center gap-6">
          <Image
            src={posterUrl}
            alt={title}
            width={120}
            height={180}
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col h-full  justify-end">
            <h1 className="text-md text-white/40 font-semibold">{title}</h1>
            <p className="text-2xl font-bold mt-1">User Reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="pt-10">
        <div className="grid gap-4  w-full">
          {media && media.result && media.result.length ? (
            media.result.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                isReviewLiked={
                  (review &&
                    review?.reviewLike &&
                    (review?.reviewLike[0]?.isLike as boolean)) ||
                  false
                }
                user={user}
                meta={pageReview.meta}
              />
            ))
          ) : (
            <div className="text-center mt-10 text-primary font-bold text-2xl">
              This media has no reviews! Be the first to give one!
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div>
        <ReviewPagination meta={pageReview.meta} setPage={setPage} />
      </div>
    </div>
  );
};

export default AllReviewSection;
