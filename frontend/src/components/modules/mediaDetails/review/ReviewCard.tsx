"use client";
import { ILatestReview, IMeta, IUser } from "@/types";
import Image from "next/image";
import { Heart, MessageSquareText, NotebookText, Star } from "lucide-react";
import { useState } from "react";
import CommentForm from "./CommentForm"; // For adding new comments
import CommentCard from "./CommentCard"; // To display each comment
import { formatDistanceToNow } from "date-fns";

import { reactsConverter } from "@/lib/formatter";

import { usePathname, useRouter } from "next/navigation";
import { useLikeMutation } from "@/hooks/mutations/useLikeMutation";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

interface IReviewCardProps {
  review: ILatestReview;
  isReviewLiked: boolean;
  user: IUser | null;
  meta?: IMeta;
}

const ReviewCard = ({
  review,
  isReviewLiked: isReacted,
  user,
  meta,
}: IReviewCardProps) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [showReview, isShowReview] = useState(review.isSpoiler);
  const router = useRouter();
  const pathname = usePathname();

  const { mutate: updateMediaLike, isPending: isMediaLikePending } =
    useLikeMutation();

  const handleCommentClick = () => {
    setIsCommenting(!isCommenting);
  };

  const handleReact = () => {
    if (!user?.userId)
      return router.push(`/login?redirect=${pathname}&cleanup=true`);

    const payload = {
      userId: user.userId,
      reviewId: review.id,
    };

    updateMediaLike(payload);
  };

  return (
    <div className="bg-muted/50 p-5 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 mb-4">
          {/* User Info */}
          <Image
            src={review.user.profilePhoto || "https://github.com/shadcn.png"}
            alt={review.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-bold uppercase">{review.user.name}</p>
            <p className="text-xs text-gray-400">
              {formatDistanceToNow(new Date(review.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>

          {/* Rating   */}
          <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
            <Star className="w-4 h-4 fill-yellow-400" />{" "}
            <span>{review.rating}/10</span>
          </div>
        </div>
        {meta && (
          <div className="text-white/70 font-bold text-lg flex items-center gap-1">
            <span>
              <NotebookText className="size-5" />
            </span>
            <span className="text-primary">{meta?.page}</span>
            <span>of</span>
            {meta?.total}
          </div>
        )}
      </div>

      {/* Review Content */}
      {showReview ? (
        <div className="mb-3">
          <p className="text-white/70">{review.writtenReview}</p>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <PrimaryButton
            btnText="Spoiler Alert"
            isLoading={false}
            variant="outline"
            className="w-fit text-primary"
            loadingText="Loading"
            onClick={() => isShowReview(!showReview)}
          />
        </div>
      )}

      {/* Likes and Comments */}
      <div className="flex w-full flex-col-reverse justify-between pt-3 text-xxs sm:flex-row md:text-sm">
        <div className="flex w-full items-start space-x-1 text-white hover:cursor-pointer md:space-x-3">
          <div
            onClick={handleReact}
            className="py-1 pr-2 text-xs md:pr-3 md:text-sm"
          >
            <span
              className={`flex items-center gap-2 font-light hover:text-primary`}
            >
              <Heart
                className={`!md:size-6 !size-4 ${
                  isReacted ? "fill-red-500 text-red-500" : ""
                }`}
              />
              {isMediaLikePending ? "Reacting..." : " React"}
            </span>
          </div>
          <div
            onClick={handleCommentClick}
            className="py-1 pr-2 text-xs hover:text-primary md:pr-3 md:text-sm"
          >
            <span className="flex items-center gap-2 font-light">
              <MessageSquareText className="!md:size-6 !size-4" />
              {isCommenting ? "Cancel" : "Comment"}
            </span>
          </div>
        </div>
        <div className="flex w-full gap-5 sm:items-end text-sm sm:justify-end">
          <h4 className="text-white/30">
            {reactsConverter(review.likesCount)}
            <span> {review.likesCount > 1 ? "Reacts" : "React"}</span>
          </h4>
          <h4 className="text-white/30">
            {reactsConverter(review.commentCount)}{" "}
            <span>{review.commentCount > 1 ? "Comments" : "Comment"}</span>
          </h4>
        </div>
      </div>

      {/* Comments Section */}
      {isCommenting && (
        <CommentForm
          reviewId={review.id}
          user={user}
          setIsCommenting={setIsCommenting}
        />
      )}
      <div className="mt-4">
        {review.comment.length > 0 && (
          <div>
            {review.comment.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
