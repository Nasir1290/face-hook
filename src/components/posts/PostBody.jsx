import React from "react";

const PostBody = ({ poster, content }) => {

  return (

    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <div className="flex items-center justify-center overflow-hidden">

        {poster && (
          <img
            className=" w-[50%] border rounded-md p-3"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
            alt="poster"
          />
        )}

      </div>
      <p>{content ? content : "No Content Available"}</p>
    </div>

  );
};

export default PostBody;
