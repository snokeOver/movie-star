import RecommendedSection from "@/components/modules/home/RecommendedSection";
import TopRatedSection from "@/components/modules/home/TopRatedSection";
import TrendingSection from "@/components/modules/home/TrendingSection";
import { HomeBannerCarousel } from "@/components/shared/carousel/HomeBannerCarouse";

import { getPublicData } from "@/services/core/getPublicData";
import React from "react";

const HomePage = async () => {
  const bannerMedia = await getPublicData("media/home-banner");
  const trendingMedia = await getPublicData("media/trending");
  const popularMedia = await getPublicData("media/hightest-rated");
  const recommendedMedia = await getPublicData("media/admin-selected");

  return (
    <div>
      <div className="container mx-auto my-20">
        <HomeBannerCarousel bannerMedias={bannerMedia} />
        <div className="space-y-10">
          <TrendingSection medias={trendingMedia} />
          <TopRatedSection medias={popularMedia} />
          <RecommendedSection medias={recommendedMedia} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
