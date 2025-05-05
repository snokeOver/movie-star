import MediaDetailsSection from "@/components/modules/mediaDetails";
import { IPageWithProps } from "@/types";

const MediaDetailsPage = async ({ params }: IPageWithProps) => {
  const idParams = await params;
  const mediaId = idParams?.id;

  if (!mediaId) {
    return <div>Media not found</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <MediaDetailsSection mediaId={mediaId} />
    </div>
  );
};

export default MediaDetailsPage;
