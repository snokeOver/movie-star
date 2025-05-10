"use client";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { PopularCard } from "@/components/shared/core/card/PopularCard";
import { IMedia } from "@/types";
import Link from "next/link";

interface ITrendingSectionProps {
  medias: IMedia[];
}
const TrendingSection = ({ medias }: ITrendingSectionProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
          Most Popular Ones
        </h2>
        <Link href="/movies">
          <PrimaryButton
            variant="outline"
            btnText="See All"
            className="w-fit"
            isLoading={false}
            loadingText=""
          />
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
        {medias.map((media: IMedia) => (
          <PopularCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
