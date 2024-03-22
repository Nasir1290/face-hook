import React, { useState } from "react";
import PostCommentsList from "./PostCommentsList";
import { useAvatar } from "../../hooks/useAvatar";
import useAxiosAuthentication from "../../hooks/useAxiosAuthentication";

const PostComments = ({ post }) => {
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");

  const [showAllComments, setShowAllComments] = useState(false);

  const { avatarUrl } = useAvatar(post);

  const api = useAxiosAuthentication();

  const handleAddComment = async (event) => {
    const keyCode = event.keyCode;

    try {
      if (keyCode === 13) {
        const response = await api.patch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/comment`,
          { comment }
        );

        if (response.status === 200) {
          setComments([...response.data.comments]);
        }
      }
    } catch (error) {}
  };

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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => handleAddComment(e)}
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
          All Comment {showAllComments ? "🔼.." : "🔽.."}
        </button>
      </div>
      {showAllComments && (
        <>
          {!!comments &&
            comments.map((comment) => (
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
