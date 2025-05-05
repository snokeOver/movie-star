"use client";

import { Genre, IMedia, StreamingPlatform } from "@/types";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Star,
  Eye,
  ShoppingCart,
  PlusCircle,
  Pencil,
} from "lucide-react";
import { getEnumValueByKey } from "@/lib/formatter";
import { useUserStore } from "@/stores/auth";
import { usePathname, useRouter } from "next/navigation";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import { useCreateCheckoutMutation } from "@/hooks/mutations/useCreateCheckoutMutaion";
import CreateReviewDialogue from "./CreateReviewDialogue";
import { DivButton } from "@/components/ui/divbutton";

const MediaDetailsSection = ({ media }: { media: IMedia }) => {
  const pathname = usePathname();
  const { mutate: createCheckoutSession, isPending: isCheckoutPending } =
    useCreateCheckoutMutation();

  const { user } = useUserStore();
  const router = useRouter();

  //handle purchase
  const handlePurchase = () => {
    if (!user?.userId)
      return router.push(`/login?redirect=${pathname}&cleanup=true`);

    const payload = {
      price: media.price,
      purchaseType: media.priceType,
      customerEmail: user.email,
      customerId: user.userId,
      productId: media.id,
      productName: media.title,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    };

    createCheckoutSession(payload);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 text-white bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Poster */}
      <div className=" flex-shrink-0 w-full lg:w-1/3">
        <div className="relative">
          <Image
            src={media.posterUrl}
            alt={media.title}
            width={600}
            height={900}
            className="w-full h-[600px] rounded-lg shadow-lg object-cover relative z-0"
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
              <Heart className="size-4" />
              3.2K
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="size-4" />
              123
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
              isLoading={false}
              onClick={() => ({})}
              loadingText="Adding..."
              variant="secondary"
              btnText="Add to Wishlist"
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
            <PrimaryButton
              isLoading={false}
              onClick={() => ({})}
              loadingText="Loading..."
              btnText="Like"
              Icon={Heart}
              variant="ghost"
              className="text-white text-xs border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetailsSection;
