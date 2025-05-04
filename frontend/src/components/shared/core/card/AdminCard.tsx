import Image from "next/image";
import { IMedia } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import PrimaryButton from "../../buttons/PrimaryButton";
import { format } from "date-fns";
import { ActionConfirmationDialogue } from "../../dialogue/ActionConfirmationDialogue";
import { useRouter } from "next/navigation";
import { useMediaMutation } from "@/hooks/mutations/useMediaMutation";

interface IAdminCardProps {
  media: IMedia;
}

export function AdminCard({ media }: IAdminCardProps) {
  const router = useRouter();
  const { mutate: deleteMedia, isPending: isLoading } = useMediaMutation();

  //handle delete movie series
  const handleDelete = async () => {
    deleteMedia({ type: "delete", mediaId: media.id });
  };
  return (
    <Card>
      <div className="relative">
        <Image
          src={media.posterUrl}
          alt={media.title}
          width={500}
          height={500}
          className="h-56 w-full object-cover rounded-t-xl z-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg z-10" />
      </div>

      <CardContent className="grid gap-4">
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span>
                <Star className="text-yellow-400 fill-amber-400 size-4" />
              </span>
              <span className="text-white">{media.rating}/10</span>
            </div>
            <span>
              <Star className="text-primary ml-2 size-4" />
            </span>
          </div>
          <h3 className="text-lg font-medium">
            {media.title.slice(0, 1).toUpperCase() + media.title.slice(1)}
          </h3>

          <h3 className="text-md font-medium">
            Created: {format(new Date(media.createdAt), "dd-MM-yyyy")}
          </h3>

          <div className="flex gap-2">
            <div className="flex-1">
              <PrimaryButton
                btnText="Update"
                isLoading={false}
                loadingText=""
                onClick={() =>
                  router.push(`/dashboard/admin/media/create?id=${media.id}`)
                }
                className="rounded-full mt-2 "
              />
            </div>

            <div className="flex-1">
              <ActionConfirmationDialogue
                onConfirm={handleDelete}
                isLoading={isLoading}
                bodyText="This media will be deleted permanently"
                triggerButton={
                  <PrimaryButton
                    btnText="Delete"
                    isLoading={false}
                    loadingText=""
                    className="rounded-full mt-2 bg-destructive  hover:bg-destructive/80"
                  />
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
