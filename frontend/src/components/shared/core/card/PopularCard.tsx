"use client";
import Image from "next/image";
import { IMedia } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Star, Video } from "lucide-react";
import PrimaryButton from "../../buttons/PrimaryButton";
import { useRouter } from "next/navigation";

interface IPopularCardProps {
  media: IMedia;
}

export function PopularCard({ media }: IPopularCardProps) {
  const router = useRouter();
  return (
    <Card>
      <div className="relative">
        <Image
          src={media.posterUrl}
          alt={media.title}
          width={500}
          height={500}
          className="h-56 w-full object-cover rounded-t-xl z-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
      </div>

      <CardContent className="grid gap-4">
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span>
                <Star className="text-yellow-400 fill-amber-400 size-4" />
              </span>
              <span className="text-white/50">{media.rating}/10</span>
            </div>
            <span>
              <Star className="text-primary ml-2 size-4" />
            </span>
          </div>
          <h3 className="text-md line-clamp-1 text-white/70 font-medium">
            {media.title.slice(0, 1).toUpperCase() + media.title.slice(1)}
          </h3>

          <div className="flex flex-col gap-2">
            <PrimaryButton
              btnText="Wishlist"
              isLoading={false}
              loadingText=""
              onClick={() => {}}
              Icon={Plus}
              className="rounded-sm text-white/80 bg-blue-100/10 hover:bg-blue-400/20 mt-2"
            />
            <PrimaryButton
              btnText="Details"
              isLoading={false}
              loadingText=""
              onClick={() => router.push(`/media/${media.id}`)}
              Icon={Video}
              className="rounded-full text-white/70 hover:text-blue-500/40 mt-2 bg-trasparent flex-1 hover:bg-transparent"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
