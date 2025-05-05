import MediaDetailsSection from "@/components/modules/mediaDetails";
import { getPublicData } from "@/services/core/getPublicData";
import { IPageWithProps } from "@/types";

const MediaDetailsPage = async ({ params }: IPageWithProps) => {
  const idParams = await params;
  const mediaId = idParams?.id;

  if (!mediaId) {
    return <div>Media not found</div>;
  }

  const media = await getPublicData(`media/single-public/${mediaId}`);

  return (
    <div className="p-6 space-y-4">
      <MediaDetailsSection media={media} />
    </div>
  );
};

export default MediaDetailsPage;
