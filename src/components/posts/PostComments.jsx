import React, { useState } from "react";
import PostCommentsList from "./PostCommentsList";
import { useAvatar } from "../../hooks/useAvatar";

const PostComments = ({ post }) => {
  const [showAllComments, setShowAllComments] = useState(false);
  const { avatarUrl } = useAvatar(post);

  const handleSHowAllComments = () => {
    setShowAllComments((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={avatarUrl}
          alt="avatar"
        />

        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            placeholder="What's on your mind?"
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={handleSHowAllComments}
          className="text-gray-300 max-md:text-sm"
        >
          All Comment {showAllComments?"🔼..":"🔽.."}
        </button>
      </div>
      {showAllComments && (
        <>
          {!!post?.comments &&
            post?.comments.map((comment) => (
              <PostCommentsList
                key={comment.author.id}
                post={post}
                postComment={comment}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default PostComments;
