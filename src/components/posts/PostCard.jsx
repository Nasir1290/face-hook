import React from "react";
import PostHeader from "./PostHeader";
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";

const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post}/>
      <PostBody />
      <PostAction />
      <PostComments />
    </article>
  );
};

export default PostCard;
