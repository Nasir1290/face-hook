import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../common/Header";
import ProfileProvider from "../providers/ProfileProvider";
import { usePost } from "../hooks/usePost";
import PostProvider from "../providers/PostProvider";
const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <>
          <PostProvider>
            <ProfileProvider>
              <Header />
              <main className=" mx-auto mx-w-[1020px] py-8">
                <div className=" container">
                  <Outlet />
                </div>
              </main>
            </ProfileProvider>
          </PostProvider>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoutes;
