import AllReviewSection from "@/components/modules/mediaDetails/reviews";
import { IPageWithProps } from "@/types";

const ReviewsPage = async ({ params }: IPageWithProps) => {
  const idParams = await params;
  const mediaId = idParams?.id;

  if (!mediaId) {
    return <div>Media not found</div>;
  }

  return (
    <div className="p-3 lg:p-6 space-y-4">
      <AllReviewSection mediaId={mediaId} />
    </div>
  );
};

export default ReviewsPage;
