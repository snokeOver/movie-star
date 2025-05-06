import { IMinComment } from "@/types";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

interface CommentCardProps {
  comment: IMinComment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="px-3 py-2 bg-muted/70 rounded-lg shadow-lg mb-2">
      <div className="flex items-center gap-4 mb-1">
        <Image
          src={comment.user.profilePhoto || "https://github.com/shadcn.png"}
          alt={comment.user.name}
          width={25}
          height={25}
          className="rounded-full"
        />
        <div className="flex items-center gap-2">
          <p className="font-bold uppercase">{comment.user.name}</p>
          <p className="text-xs text-gray-400">
            {formatDistanceToNow(new Date(comment.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
      <p className="text-white/60">{comment.content}</p>
    </div>
  );
};

export default CommentCard;
