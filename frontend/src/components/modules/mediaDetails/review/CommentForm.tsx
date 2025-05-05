import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { FieldValues, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth/register";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useState } from "react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
interface CommentFormProps {
  reviewId: string;
}

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, "Write something about this review")
    .max(500, "Comment is too long"),
});

const CommentForm = ({ reviewId }: CommentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    const { confirmPassword, ...rest } = data;
    void confirmPassword;
    // Convert data to FormData
    const formData = new FormData();

    formData.append("data", JSON.stringify(rest));

    try {
      const res = await registerUser(formData);

      if (res?.success) {
        toast.success(res?.message);
        router.push("/verify-email");
      } else toast.error(res?.message);
    } catch (error) {
      console.log(error);
      toast.error(`User registration Failed`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5 mt-2"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Write your review" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <PrimaryButton
          btnText="Post Comment"
          type="submit"
          isLoading={false}
          loadingText="Posting..."
          className="w-fit text-xs"
        />
      </form>
    </Form>
  );
};

export default CommentForm;
