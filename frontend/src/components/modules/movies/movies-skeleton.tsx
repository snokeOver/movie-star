import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function MoviesSkeleton() {
  // Create an array of 9 items for the skeleton grid
  const skeletonItems = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="space-y-8">
      <Skeleton className="h-5 w-48" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {skeletonItems.map((item) => (
          <Card key={item} className="overflow-hidden h-full flex flex-col">
            <div className="relative aspect-[2/3] w-full overflow-hidden">
              <Skeleton className="h-full w-full" />
            </div>
            <CardHeader className="p-4 pb-0">
              <div className="flex justify-between items-start gap-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-5 w-10" />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2 flex-grow">
              <div className="flex flex-wrap gap-2 mb-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-24" />
              </div>
              <Skeleton className="h-4 w-32 mt-2" />
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t flex justify-between items-center">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-8 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
