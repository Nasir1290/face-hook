import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <main className=" mx-auto mx-w-[1020px] py-8">
          <div className=" container">
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoutes;
