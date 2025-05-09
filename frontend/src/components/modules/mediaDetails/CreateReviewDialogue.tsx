"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/extension/multi-select";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/customUI/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { useUserStore } from "@/stores/auth";
import { IChildren, IDisapprovedReview } from "@/types";
import { useReviewMutation } from "@/hooks/mutations/useReviewMutation";
import { usePathname, useRouter } from "next/navigation";

// Define the schema for review submission
const reviewSchema = z.object({
  rating: z
    .number()
    .min(1)
    .max(10, { message: "Rating must be between 1 and 10" }),
  writtenReview: z.string().min(1, { message: "Review cannot be empty" }),
  isSpoiler: z.boolean(),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
});

const suggestedTags = [
  "Classic",
  "Underrated",
  "Must-See",
  "Visually Stunning",
  "Suspenseful",
  "Action-Packed",
  "Thought-Provoking",
  "Heartwarming",
  "Hilarious",
  "Dark",
  "Family-Friendly",
  "Cult Classic",
  "Overrated",
  "Nostalgic",
  "Based On A Book",
  "True Story",
  "Masterpiece",
  "Hidden Gem",
  "Binge-Worthy",
  "Slow Burn",
];

interface ICreateReviewDialogueProps extends IChildren {
  currReview?: IDisapprovedReview;
  mediaId: string;
}

const CreateReviewDialogue = ({
  children,
  currReview,
  mediaId,
}: ICreateReviewDialogueProps) => {
  const { mutate: createReview, isPending: isLoading } = useReviewMutation();

  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: currReview?.rating || 1,
      writtenReview: currReview?.writtenReview || "",
      isSpoiler: currReview?.isSpoiler || false,
      tags: currReview?.tags || [],
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    if (!user || !user.userId) return;

    const reviewData = {
      movieSeriesId: mediaId,
      userId: user.userId,
      rating: data.rating,
      writtenReview: data.writtenReview,
      isSpoiler: data.isSpoiler,
      tags: data.tags,
    };

    createReview({
      type: currReview ? "update" : "create",
      reviewId: currReview?.id || undefined,
      input: reviewData,
    });
  };

  //handle review create
  const handleCreateReview = () => {
    if (!user || !user.userId) {
      setIsOpen(false);
      return router.push(`/login?redirect=${pathname}&cleanup=true`);
    }
  };

  useEffect(() => {
    if (!isLoading) setIsOpen(false);
  }, [isLoading]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full" onClick={handleCreateReview}>
        {children}
      </DialogTrigger>
      <DialogContent className="lg:max-w-4xl">
        <div className="flex flex-col items-center gap-10">
          <DialogTitle>
            <p className="text-lg font-bold uppercase lg:text-2xl">
              {currReview ? "Update" : "Create"} Review
            </p>
          </DialogTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-5"
            >
              {/* review */}
              <FormField
                control={form.control}
                name="writtenReview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Your Review <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Write your review" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Ratings */}
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Rating <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter rating (1-10)"
                          value={field.value || ""}
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            field.onChange(isNaN(value) ? "" : value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                <FormField
                  control={form.control}
                  name="isSpoiler"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Spoiler Alert{" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          value={field.value ? "true" : "false"}
                          onValueChange={(value) =>
                            field.onChange(value === "true")
                          } // Convert string back to boolean
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select a status</SelectLabel>
                              <SelectItem value="true">
                                Spoiler Alert
                              </SelectItem>
                              <SelectItem value="false">No Spoiler</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Tags */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tags <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value as string[]}
                        onValuesChange={field.onChange}
                        loop
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select Tags" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {suggestedTags.map((tag) => (
                              <MultiSelectorItem
                                key={tag}
                                value={tag as string}
                              >
                                {tag}
                              </MultiSelectorItem>
                            ))}
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <PrimaryButton
                btnText={currReview ? "Update Review" : "Save Review"}
                loadingText={currReview ? "Updating..." : "Saving..."}
                isLoading={isLoading}
                type="submit"
              />
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateReviewDialogue;
