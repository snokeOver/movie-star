"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Genre, IMedia } from "@/types";
import Image from "next/image";
import { getEnumValueByKey } from "@/lib/formatter";

interface IHomeBannerCarouselProps {
  bannerMedias: (Pick<
    IMedia,
    | "id"
    | "title"
    | "posterUrl"
    | "description"
    | "rating"
    | "releaseYear"
    | "cast"
  > & {
    genre: string[];
  })[];
}

export function HomeBannerCarousel({ bannerMedias }: IHomeBannerCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {bannerMedias.map((media, index) => (
          <CarouselItem key={index}>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="flex gap-10 items-center justify-between p-10 mx-10">
                {/* Poster */}
                <div className="flex-1 relative">
                  {/* Poster Image */}
                  <Image
                    src={media.posterUrl!}
                    alt={media.title ?? "banner"}
                    width={1000}
                    height={500}
                    className="h-[400px] w-full object-cover rounded-lg shadow-md"
                  />

                  {/* Top-left: Release Year */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-2xl font-bold text-white px-3 py-1 rounded-full">
                    {media.title}
                  </div>

                  {/* Top-right: Rating */}
                  <div className="absolute top-4 right-4 backdrop-blur-sm bg-white/20 text-primary font-semibold text-sm px-3 py-1 rounded-full  shadow">
                    ⭐ {media.rating}/10
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex h-[400px] justify-end flex-col">
                  <div className="space-y-4">
                    {/* Genre */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {media?.genre?.map((g, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-white/80 bg-blue-100/10 rounded-full text-sm"
                          >
                            {getEnumValueByKey(Genre, g)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground">
                      {media.description}
                    </p>
                    {/* Cast */}
                    <div>
                      <p className="text-md font-medium mb-1">
                        Major Characters
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {media.cast?.map((member, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-800 rounded-sm text-sm"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
