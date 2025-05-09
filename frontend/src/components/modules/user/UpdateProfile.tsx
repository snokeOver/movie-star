"use client";
import { updateProfileSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
// import { createMediaLibrary } from "@/services/media/createMediaLibrary";
import { toast } from "sonner";
import ImagePreviewer from "@/components/shared/core/image/ImagePreviewer";
import ImageUploader from "@/components/shared/core/image/ImageUploader";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { useProfileQuery } from "@/hooks/queries/useProfileQuery";
import { useProfileMutaion } from "@/hooks/mutations/useProfileMutaion";

export interface IProfile {
  name: string;
  profilePhoto: string;
}

const UpdateProfile = () => {
  const { data, isLoading: isProfileLoading } = useProfileQuery();

  const { mutate: updateProfile, isPending: isLoading } = useProfileMutaion();

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: "",
      profilePhoto: undefined,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", imageFiles[0] as File);

    if (!imageFiles[0] && !data.profilePhoto) {
      toast.error("Please upload an image");
      return;
    }

    updateProfile({
      input: formData,
    });
  };

  useEffect(() => {
    form.setValue("name", data?.name || "");
    form.setValue("profilePhoto", data?.profilePhoto || "");

    if (data && data.profilePhoto) {
      setImagePreview([data.profilePhoto]);
    }
  }, [data]);

  if (isProfileLoading) return <LoadingSection />;
  if (!data) return null;

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-lg font-bold uppercase lg:text-2xl">
        Update Profile
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
        <div className="flex items-center justify-center w-full">
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
              label="Upload Profile Photo"
            />
          )}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5 "
          >
            {/* title */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PrimaryButton
              btnText="Update"
              loadingText="Updating..."
              isLoading={isLoading}
              type="submit"
              className="w-fit"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
