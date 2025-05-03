"use client";
import { PopularCard } from "@/components/shared/core/card/PopularCard";
import { IMedia } from "@/types";

interface IRecommendedSectionProps {
  medias: IMedia[];
}
const RecommendedSection = ({ medias }: IRecommendedSectionProps) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl text-primary lg:text-2xl xl:text-3xl font-bold mb-4">
        Recommended
      </h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
        {medias.map((media: IMedia) => (
          <PopularCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
