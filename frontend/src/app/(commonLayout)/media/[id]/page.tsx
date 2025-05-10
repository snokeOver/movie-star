import MediaDetailsSection from "@/components/modules/mediaDetails";
import { IPageWithProps } from "@/types";

const MediaDetailsPage = async ({ params }: IPageWithProps) => {
  const { id } = await params;

  if (!id) {
    return <div>Media not found</div>;
  }

  return (
    <div className="p-3 lg:p-6 space-y-4">
      <MediaDetailsSection mediaId={id} />
    </div>
  );
};

export default MediaDetailsPage;
