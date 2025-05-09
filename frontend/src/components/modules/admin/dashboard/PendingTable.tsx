import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import TableRowActions from "../reviews/TableRowActions";

import { useRouter } from "next/navigation";

export interface IPendingModifiedReviews {
  id: string;
  title: string;
  status: string;
  user: string;
  submitted: Date;
}

const PendingTable = ({
  pendingReviews,
  totalPending,
}: {
  pendingReviews: IPendingModifiedReviews[];
  totalPending: number;
}) => {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mt-3">Pending Reviews</CardTitle>
        <CardDescription>
          You have {totalPending} reviews waiting for approval
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Review</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingReviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell className="font-medium">{review.title}</TableCell>
                <TableCell>{review.user}</TableCell>
                <TableCell>
                  {format(new Date(review.submitted), "dd-MM-yyyy")}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-800 border-yellow-600">
                    {review.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <TableRowActions reviewId={review.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => router.push("/dashboard/admin/reviews/manage")}
          variant="outline"
          className="w-full"
        >
          View All Reviews
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PendingTable;
