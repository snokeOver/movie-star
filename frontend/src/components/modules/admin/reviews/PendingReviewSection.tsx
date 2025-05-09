"use client";
import React from "react";
import { PendingReviewTable } from "./PendingReviewTable";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { usePendingReviewQuery } from "@/hooks/queries/usePendingReviewQuery";
export interface IReview {
  id: string;
  writtenReview: string;
  profilePhoto: string;
  status: string;
  isSpoiler: boolean;
  createdAt: Date;
  name: string;
}

export interface UnformattedReview {
  id: string;
  writtenReview: string;
  status: string;
  isSpoiler: boolean;
  createdAt: Date;
  user: {
    name: string;
    profilePhoto: string;
  };
}
const PendingReviewSection = () => {
  const { data: reviews, isLoading } = usePendingReviewQuery();

  const data: IReview[] = reviews?.data?.map((review: UnformattedReview) => {
    const { user, ...rest } = review;
    return {
      ...rest,
      name: user.name,
      profilePhoto: user.profilePhoto,
    };
  });

  if (isLoading) return <LoadingSection />;
  if (!data) return null;
  return (
    <>
      <PendingReviewTable data={data} />
    </>
  );
};

export default PendingReviewSection;
