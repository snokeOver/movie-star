"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ChevronLeft,
  Edit,
  Eye,
  Film,
  Pencil,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRejectedReviewQuery } from "@/hooks/queries/useRejectedReviewQuery";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { IDisapprovedReview } from "@/types";
import CreateReviewDialogue from "@/components/modules/mediaDetails/CreateReviewDialogue";
import { DivButton } from "@/components/ui/divbutton";

export default function DisapprovedReviewsPage() {
  const { data, isLoading } = useRejectedReviewQuery();
  const initialReviews = data as IDisapprovedReview[];
  const [reviews, setReviews] = useState(initialReviews);

  useEffect(() => {
    setReviews(initialReviews);
  }, [initialReviews]);

  if (isLoading) return <LoadingSection />;
  if (!reviews) return null;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-5">Your Disapproved Reviews</h1>

      <Card>
        <CardHeader>
          <CardDescription className="pt-4">
            These reviews were not approved by our moderators. You can edit and
            resubmit them.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {reviews.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              You don&apos;t have any disapproved reviews.
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={review.movieSeries.posterUrl || "/placeholder.svg"}
                      alt={`${review.movieSeries.title} poster`}
                      width={500}
                      height={750}
                      className="w-[100px] h-[150px] object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center">
                          <Film className="h-4 w-4 mr-2 text-muted-foreground" />
                          {review.movieSeries.title} (
                          {review.movieSeries.releaseYear})
                        </h3>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{review.rating}/5</span>
                          <span className="text-xs text-muted-foreground ml-2">
                            Posted on{" "}
                            {new Date(review.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant="destructive"
                        className="flex items-center gap-1 h-6"
                      >
                        <AlertCircle className="h-3 w-3" />
                        Disapproved
                      </Badge>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm line-clamp-3">
                        {review.writtenReview}
                      </p>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                      <div>
                        <CreateReviewDialogue
                          mediaId={review.movieSeries.id}
                          currReview={review}
                        >
                          <DivButton className="text-white text-xs w-fit">
                            <Pencil /> Update & Resubmit
                          </DivButton>
                        </CreateReviewDialogue>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
