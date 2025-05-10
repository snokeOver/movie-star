import Image from "next/image";
import Link from "next/link";
import { Star, Eye, Video } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { useRouter } from "next/navigation";

export interface IMovies {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: string;
  genre: string[];
  rating: number;
  viewCount: number;
  streamingPlatform: string[];
}

export function MovieCard({ movie }: { movie: IMovies }) {
  const router = useRouter();
  // Function to get platform badge color
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "netflix":
        return "bg-red-500 hover:bg-red-600 border-red-600";
      case "disney":
        return "bg-blue-600 hover:bg-blue-700 border-blue-700";
      case "amazon":
        return "bg-blue-500 hover:bg-blue-600 border-blue-600";
      case "hbo":
        return "bg-purple-600 hover:bg-purple-700 border-purple-700";
      case "apple":
        return "bg-gray-800 hover:bg-gray-900 border-gray-900";
      default:
        return "bg-primary hover:bg-primary/90 border-primary";
    }
  };

  // Capitalize first letter
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-card transition-all duration-300 hover:shadow-lg">
      <div className="relative w-full overflow-hidden">
        <Image
          src={movie.posterUrl || "/placeholder.svg"}
          alt={movie.title}
          width={500}
          height={500}
          className="h-72 object-cover"
          priority={false}
        />

        {/* Rating badge */}
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-md">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{movie.rating.toFixed(1)}</span>
        </div>
      </div>

      <CardHeader className="px-3 py-0 my-0">
        <div className="flex justify-between items-start">
          <Link href={`/movies/${movie.id}`} className="hover:underline">
            <h3 className="font-semibold line-clamp-1 text-base">
              {movie.title}({movie.releaseYear})
            </h3>
          </Link>
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>{movie.viewCount.toLocaleString()}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-3 flex-grow">
        {/* Genres */}
        <div className="flex flex-wrap gap-1.5">
          {movie.genre.map((genre, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs px-1.5 py-0"
            >
              {genre}
            </Badge>
          ))}
        </div>

        {/* Streaming platforms */}
        <div className="my-3">
          <p className="text-xs text-muted-foreground mb-1.5">Available on:</p>
          <div className="flex flex-wrap gap-1.5">
            {movie.streamingPlatform.map((platform, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      className={`${getPlatformColor(
                        platform
                      )} text-white border text-xs`}
                    >
                      {platform.length > 6
                        ? platform.substring(0, 6)
                        : capitalize(platform)}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Watch on {capitalize(platform)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0">
        <PrimaryButton
          btnText="Details"
          isLoading={false}
          loadingText=""
          onClick={() => router.push(`/media/${movie.id}`)}
          Icon={Video}
          className="rounded-full w-full border text-white/70 hover:text-blue-500/40 mt-2 bg-trasparent flex-1 hover:bg-transparent"
        />
      </CardFooter>
    </Card>
  );
}
