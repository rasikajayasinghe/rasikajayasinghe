import React from "react";

interface CommentCardProps {
  name: string;
  comment: string;
}

const CommentCard = ({ name, comment }: CommentCardProps) => {
  return (
    <div className="rounded border border-stone-300 p-5">
      <p>
        <span className="text-gray-400 font-medium">{name}: </span>
        <span className="text-gray-600">{comment}</span>
      </p>
    </div>
  );
};

export default CommentCard;
