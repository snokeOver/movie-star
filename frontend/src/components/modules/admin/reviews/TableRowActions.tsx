import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { DropdownMenu, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  TActionType,
  useReviewApproveMutation,
} from "@/hooks/mutations/useReviewApproveMutation";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const ActionButton = ({
  reviewId,
  action,
}: {
  reviewId: string;
  action: TActionType;
}) => {
  const { mutate: approveReview, isPending } = useReviewApproveMutation();

  return (
    <DropdownMenuLabel
      className="cursor-pointer hover:text-primary"
      onClick={() => approveReview({ reviewId, action })}
    >
      <PrimaryButton
        btnText={action}
        isLoading={isPending}
        loadingText="Loading..."
        className="w-full"
      />
    </DropdownMenuLabel>
  );
};

const TableRowActions = ({ reviewId }: { reviewId: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ActionButton reviewId={reviewId} action={"Approve"} />
        <ActionButton reviewId={reviewId} action="Unpublish" />
        <ActionButton reviewId={reviewId} action="Delete" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableRowActions;
