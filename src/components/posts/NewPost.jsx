import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import DummyProfilePic from "../../assets/icons/dummy-profile.png";
import PostEntry from "./PostEntry";
import { useProfile } from "../../hooks/useProfile";

const NewPost = ({ state }) => {
  const { state: profile } = useProfile();
  const { auth } = useAuth();
  const user = profile?.user ?? auth?.user;
  const [isProfilePic, setIsProfilePic] = useState(!!auth?.user?.avatar);
  const [showPostEntry, setShowPostEntry] = useState(false);
  return (
    <>
      {showPostEntry ? (
        <PostEntry onSubmit={() => setShowPostEntry(false)}/>
      ) : (
        <>
          <div className="card">
            <div className="flex-center mb-3 gap-2 lg:gap-4">
              <img
                className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                src={
                  isProfilePic
                    ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                       user?.avatar
                      }`
                    : DummyProfilePic
                }
                alt="avatar"
              />

              <div className="flex-1">
                <textarea
                  className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                  name="post"
                  id="post"
                  placeholder="What's on your mind?"
                  onClick={() => setShowPostEntry(true)}
                ></textarea>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewPost;
