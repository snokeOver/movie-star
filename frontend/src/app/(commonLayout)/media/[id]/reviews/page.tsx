import AllReviewSection from "@/components/modules/mediaDetails/reviews";
import { IPageWithProps } from "@/types";

const ReviewsPage = async ({ params }: IPageWithProps) => {
  const { id } = await params;

  if (!id) {
    return <div>Media not found</div>;
  }

  return (
    <div className="p-3 lg:p-6 space-y-4">
      <AllReviewSection mediaId={id} />
    </div>
  );
};

export default ReviewsPage;
