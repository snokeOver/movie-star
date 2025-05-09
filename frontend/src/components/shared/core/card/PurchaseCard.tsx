"use client";
import Image from "next/image";
import { IPurchaseListMedia } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star, Video } from "lucide-react";
import PrimaryButton from "../../buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface IWatchlistCardProps {
  media: IPurchaseListMedia;
}

export function PurchaselistCard({ media }: IWatchlistCardProps) {
  const router = useRouter();

  return (
    <Card>
      <div className="relative">
        <Image
          src={media.movieSeries.posterUrl}
          alt={media.movieSeries.title}
          width={500}
          height={500}
          className="h-56 w-full object-cover rounded-t-xl z-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
      </div>

      <CardContent className="grid gap-4">
        <div className="space-y-1">
          <h3 className="text-md line-clamp-1 mb-2 text-white/70 font-medium">
            {media.movieSeries.title.slice(0, 1).toUpperCase() +
              media.movieSeries.title.slice(1)}
          </h3>
          <div className="text-sm text-muted-foreground flex justify-between items-center">
            {media?.accessExpiry ? (
              <div className="flex gap-2 items-center bg-white/10 px-2 py-1 rounded-full text-primary w-full text-center">
                Expire:
                <span className="text-white/50">
                  {format(new Date(media.accessExpiry), "dd/MM/yyyy")}
                </span>
              </div>
            ) : (
              <div className="bg-white/10 px-2 py-1 rounded-full text-primary w-full text-center">
                Life Time Access
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <PrimaryButton
              btnText="Watch Now"
              isLoading={false}
              loadingText={"Updating..."}
              onClick={() =>
                window.open(`${media.movieSeries.accessLink}`, "_blank")
              }
              Icon={Play}
              className="rounded-sm text-white/80 bg-blue-100/10 hover:bg-blue-400/20 mt-2"
            />
            <PrimaryButton
              btnText="Details"
              isLoading={false}
              loadingText=""
              onClick={() => router.push(`/media/${media.movieSeries.id}`)}
              Icon={Video}
              className="rounded-full text-white/70 hover:text-blue-500/40 mt-2 bg-trasparent flex-1 hover:bg-transparent"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
