import { IMinComment } from "@/types";
import Image from "next/image";

interface CommentCardProps {
  comment: IMinComment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <div className="flex items-center gap-4 mb-3">
        <Image
          src={comment.user.profilePhoto}
          alt={comment.user.name}
          width={800}
          height={800}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">{comment.user.name}</p>
          <p className="text-sm text-gray-400">
            {new Date(comment.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p className="text-gray-700">{comment.content}</p>
    </div>
  );
};

export default CommentCard;
