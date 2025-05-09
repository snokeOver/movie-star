"use client";

import { Genre, IMedia, PriceType, StreamingPlatform } from "@/types";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Star,
  Eye,
  ShoppingCart,
  PlusCircle,
  Pencil,
  Loader,
  ArrowBigRightDash,
} from "lucide-react";
import { getEnumValueByKey } from "@/lib/formatter";
import { useUserStore } from "@/stores/auth";
import { usePathname, useRouter } from "next/navigation";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import { useCreateCheckoutMutation } from "@/hooks/mutations/useCreateCheckoutMutaion";
import CreateReviewDialogue from "./CreateReviewDialogue";
import { DivButton } from "@/components/ui/divbutton";
import { useLikeMutation } from "@/hooks/mutations/useLikeMutation";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { usePublicMediaQuery } from "@/hooks/queries/usePublicMediaQuery";
import { Button } from "@/components/ui/button";
import ReviewCard from "./review/ReviewCard";
import { useEffect } from "react";
import Link from "next/link";
import { useWatchListMutation } from "@/hooks/mutations/useWatchListMutation";

const MediaDetailsSection = ({ mediaId }: { mediaId: string }) => {
  const { user } = useUserStore();
  const router = useRouter();
  const { mutate: addToWatchlist, isPending: isWatchlistPending } =
    useWatchListMutation();

  const {
    data,
    isLoading: isSingleMediaLoading,
    refetch,
  } = usePublicMediaQuery({
    id: mediaId,
  });

  const media = data as IMedia;

  const pathname = usePathname();
  const { mutate: createCheckoutSession, isPending: isCheckoutPending } =
    useCreateCheckoutMutation();

  const { mutate: updateMediaLike, isPending: isMediaLikePending } =
    useLikeMutation();

  //handle purchase
  const handlePurchase = () => {
    if (!user?.userId)
      return router.push(`/login?redirect=${pathname}&cleanup=true`);

    const payload = {
      price: media?.price as number,
      purchaseType: media?.priceType as PriceType,
      customerEmail: user.email,
      customerId: user.userId,
      productId: media?.id as string,
      productName: media?.title as string,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    };

    createCheckoutSession(payload);
  };

  //handle add to withlist
  const handleAddToWatchList = () => {
    if (!user?.userId)
      return router.push(`/login?redirect=${pathname}&cleanup=true`);

    const payload = {
      movieSeriesId: media?.id as string,
    };

    addToWatchlist(payload);
  };

  //handle media like
  const handleMediaLike = () => {
    if (!user?.userId)
      return router.push(`/login?redirect=${pathname}&cleanup=true`);

    const payload = {
      userId: user.userId,
      movieSeriesId: media?.id as string,
    };

    updateMediaLike(payload);
  };

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
        <div className=" flex-shrink-0 w-full lg:w-1/3">
          <div className="relative">
            <Image
              src={media.posterUrl}
              alt={media.title}
              width={600}
              height={900}
              className="w-full h-[400px] sm:h-[550px] md:h-[600px] rounded-lg shadow-lg object-cover relative z-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg z-10" />

            {/* Metrics Overlay */}
            <div className="absolute bottom-4 left-4 justify-between flex gap-4 text-sm font-medium text-white/80 z-50 w-6/12">
              <div className="flex items-center gap-1">
                <Eye className="size-4" />
                {media.viewCount?.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Heart
                  className={`size-4 ${
                    media.isUserLiked ? "fill-red-500 text-red-500" : ""
                  } `}
                />
                {media.totalLike || 0}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="size-4" />
                {media.totalReview || 0}
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-6 pt-5">
          {/* Title & Year */}
          <div>
            <h1 className="text-4xl font-bold">{media.title}</h1>
            <p className="text-sm text-gray-400 mt-1">{media.releaseYear}</p>
          </div>

          {/* Rating & Views */}
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Star className="text-yellow-400 fill-yellow-400 size-4" />
              <span>{media.rating}/10</span>
            </div>
            <span>👁️ {media.viewCount?.toLocaleString()} views</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {media.genre.map((g, i) => (
              <span
                key={i}
                className="bg-primary px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-wide"
              >
                {getEnumValueByKey(Genre, g)}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <p className="text-md text-gray-300 leading-relaxed">
              {media.description}
            </p>
          </div>

          {/* Cast & Director */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 font-medium mb-1">Top Cast</p>
              <div className="flex flex-wrap gap-2">
                {media.cast.map((c, i) => (
                  <span key={i} className="bg-white/10 px-2 py-1 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-400 font-medium mb-1">Director</p>
              <div className="flex flex-wrap gap-2">
                {media.director.map((d, i) => (
                  <span key={i} className="bg-white/10 px-2 py-1 rounded">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-md text-gray-200 font-medium space-y-1">
            <p>
              Price:{" "}
              <span className="text-white">
                {media.price} <span className="text-sm">USD</span>
              </span>
            </p>
            {media.discount && (
              <p>
                <span className="px-3 py-1 text-sm rounded-full bg-green-400 text-black">
                  Discount Available
                </span>
              </p>
            )}
          </div>

          {/* Streaming Platforms */}
          <div>
            <p className="text-gray-400 font-medium mb-1">Available On</p>
            <div className="flex flex-wrap gap-2">
              {media.streamingPlatform.map((platform, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-800 text-white"
                >
                  {getEnumValueByKey(StreamingPlatform, platform)}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-wrap gap-4">
            <div className="flex-1">
              <PrimaryButton
                isLoading={isWatchlistPending}
                onClick={handleAddToWatchList}
                loadingText="Adding..."
                variant="secondary"
                btnText="Add to Watchlist"
                Icon={PlusCircle}
                className="text-white text-xs"
              />
            </div>

            <div className="flex-1">
              <PrimaryButton
                isLoading={isCheckoutPending}
                onClick={handlePurchase}
                loadingText="Processing..."
                btnText={media.priceType === "rent" ? "Rent Now" : "Buy Now"}
                Icon={ShoppingCart}
                className="text-white text-xs"
              />
            </div>

            <div className="flex-1">
              <CreateReviewDialogue mediaId={media.id}>
                <DivButton
                  variant="outline"
                  className="text-white text-xs w-full"
                >
                  <Pencil /> Give Review
                </DivButton>
              </CreateReviewDialogue>
            </div>

            <div className="flex-1">
              <Button
                type="button"
                onClick={handleMediaLike}
                variant="ghost"
                className={`w-full uppercase text-white text-xs border`}
                disabled={isMediaLikePending}
              >
                {isMediaLikePending ? (
                  <div className="flex items-center gap-2">
                    <Loader className="h-4 w-4 animate-spin" />
                    <span>Updating...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="mr-2">
                      {" "}
                      {media.totalLike > 0 && media.totalLike}
                    </span>
                    {
                      <Heart
                        className={`!h-4 !w-4 ${
                          media.isUserLiked ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    }
                    <span>Like</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="pt-10">
        <Link
          href={media.totalReview > 0 ? `/media/${media.id}/reviews` : ""}
          className={`text-lg md:text-xl flex items-center gap-6 lg:text-2xl font-bold mb-4 ${
            media.totalReview === 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <span className="border-l-4 border-l-primary pl-2">User Review</span>
          {media.totalReview > 0 && (
            <p className="hover:text-primary flex items-center gap-1">
              <span className="text-primary font-normal">
                {media.totalReview}
              </span>

              <ArrowBigRightDash className="h-7 w-7" />
            </p>
          )}
        </Link>
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

export default MediaDetailsSection;
