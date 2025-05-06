import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { FieldValues, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { IUser } from "@/types";
import { useCommentMutation } from "@/hooks/mutations/useCommentMutation";
import { useEffect } from "react";
interface CommentFormProps {
  reviewId: string;
  user: IUser | null;
  setIsCommenting: (value: boolean) => void;
}

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, "Write something about this review")
    .max(500, "Comment is too long"),
});

const CommentForm = ({ reviewId, user, setIsCommenting }: CommentFormProps) => {
  const { mutate: createComment, isPending } = useCommentMutation();

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    if (!user || !user?.userId) return;
    const payload = {
      reviewId,
      userId: user.userId,
      content: data.content,
    };

    createComment({ payload });
    form.reset();
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
          isLoading={isPending}
          loadingText="Posting..."
          className="w-fit text-xs"
        />
      </form>
    </Form>
  );
};

export default CommentForm;
