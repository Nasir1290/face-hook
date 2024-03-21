import React, { useState } from "react";
import LikeIcon from "../../assets/icons/like.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import ShareIcon from "../../assets/icons/share.svg";
import LikeFilled from "../../assets/icons/like-fill.png";
import useAxiosAuthentication from "../../hooks/useAxiosAuthentication";

const PostAction = ({ postId, commentCount }) => {
  const api = useAxiosAuthentication();
  const [isLike, setIsLike] = useState(false);
  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${postId}/like`
      );
      if (response.status === 200) {
        setIsLike((prevState) => !prevState);
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button
        onClick={handleLike}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        <img src={isLike ? LikeFilled : LikeIcon} alt="Like" />
        <span>{isLike ? "" : "Like"}</span>
      </button>

      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img className=" w-2 h-2" src={CommentIcon} alt="Comment" />
        <span>Comment({commentCount})</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostAction;
