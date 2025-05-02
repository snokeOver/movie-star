"use client";
import { createMediaLibrarySchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
// import { createMediaLibrary } from "@/services/media/createMediaLibrary";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import ImagePreviewer from "@/components/shared/core/image/ImagePreviewer";
import ImageUploader from "@/components/shared/core/image/ImageUploader";

import { useMediaMutation } from "@/hooks/mutations/useMediaMutation";
import { Genre, StreamingPlatform } from "@/types";

// Enums for Genre and Streaming Platform

const CreateMediaForm = () => {
  const { mutate: createMedia, isPending: isLoading } = useMediaMutation();

  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm({
    resolver: zodResolver(createMediaLibrarySchema),
    defaultValues: {
      title: "",
      description: "",
      releaseYear: new Date().getFullYear(),
      genre: [],
      director: [],
      cast: [],
      streamingPlatform: [],
      accessLink: [],
      rating: 0,
      price: 0,
      priceType: "buy",
      discount: undefined,
      discountType: undefined,
      discountExpiry: undefined,
      isActive: true,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", imageFiles[0] as File);

    if (!imageFiles[0]) {
      toast.error("Please upload an image");
      return;
    }

    createMedia({ type: "create", input: formData });
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      form.setValue("discountExpiry", date);
      setIsPopoverOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-lg font-bold uppercase lg:text-2xl">
        Create Media Library
      </h1>

      <div className="flex items-center justify-center">
        {imagePreview?.length > 0 ? (
          <ImagePreviewer
            setImageFiles={setImageFiles}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        ) : (
          <ImageUploader
            setImageFiles={setImageFiles}
            setImagePreview={setImagePreview}
            label="Upload Media Cover"
          />
        )}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Title <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Relese Year */}
            <FormField
              control={form.control}
              name="releaseYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Release Year <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter release year"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        field.onChange(isNaN(value) ? "" : value); // Convert to number or reset if NaN
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* cast */}
            <FormField
              control={form.control}
              name="cast"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Cast <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter cast names (comma separated)"
                      value={field.value.join(", ")} // Display the array as a comma-separated string
                      onChange={(e) => {
                        const newCast = e.target.value
                          .split(",")
                          .map((item) => item.trim());
                        field.onChange(newCast); // Update the form with the array of names
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Director */}
            <FormField
              control={form.control}
              name="director"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Director <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter cast names (comma separated)"
                      value={field.value.join(", ")} // Display the array as a comma-separated string
                      onChange={(e) => {
                        const newDirector = e.target.value
                          .split(",")
                          .map((item) => item.trim()); // Trim spaces
                        field.onChange(newDirector); // Update the form with the array of names
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Genres <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select a genre" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {Object.keys(Genre).map((category) => (
                            <MultiSelectorItem
                              key={category}
                              value={category as string}
                            >
                              {category}
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

            {/* Streaming Platform */}
            <FormField
              control={form.control}
              name="streamingPlatform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Streaming Platform{" "}
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select a platform" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {Object.keys(StreamingPlatform).map((category) => (
                            <MultiSelectorItem
                              key={category}
                              value={category as string}
                            >
                              {category}
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

            {/* Access Links */}
            <FormField
              control={form.control}
              name="accessLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Access Link <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter access links (comma separated)"
                      value={field.value.join(", ")} // Display the array as a comma-separated string
                      onChange={(e) => {
                        const newLinks = e.target.value
                          .split(",") // Split input by commas
                          .map((item) => item.trim()); // Trim spaces from each item
                        // Update the form state with the array of links
                        field.onChange(newLinks);
                      }}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.accessLink?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Ratings */}
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter rating (1-10)"
                      value={field.value || ""}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(isNaN(value) ? "" : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Price <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter price"
                      value={field.value || ""} // Ensure it defaults to an empty string when no value
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        field.onChange(isNaN(value) ? "" : value); // Convert to number or reset if NaN
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price Type */}
            <FormField
              control={form.control}
              name="priceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Price Type <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select price type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Price Types</SelectLabel>
                          <SelectItem value="buy">Buy</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Discount */}
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter discount (if any)"
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

            {/* Discount Type */}
            <FormField
              control={form.control}
              name="discountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Type</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select discount type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Discount Types</SelectLabel>
                          <SelectItem value="percentage">Percentage</SelectItem>
                          <SelectItem value="fixed">Fixed Amount</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Discount Expiry Date */}
            <FormField
              control={form.control}
              name="discountExpiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Expiry Date</FormLabel>
                  <FormControl>
                    <Popover
                      modal
                      open={isPopoverOpen}
                      onOpenChange={(open) => setIsPopoverOpen(open)}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full  justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={handleDateSelect}
                          disabled={(date) =>
                            date <=
                            new Date(
                              new Date().setDate(new Date().getDate() - 1)
                            )
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*            Status */}
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
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
                          <SelectItem value="true">Active</SelectItem>
                          <SelectItem value="false">Inactive</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <PrimaryButton
            btnText="Create"
            loadingText="Creating..."
            isLoading={isLoading}
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateMediaForm;
