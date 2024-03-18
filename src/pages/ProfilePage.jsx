import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosAuthentication from "../hooks/useAxiosAuthentication";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPosts from "../components/profile/MyPosts";

const ProfilePage = () => {
  const { auth } = useAuth();

  const api = useAxiosAuthentication();

  const { state, dispatch } = useProfile();

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch(actions.profile.DATA_FETCHING);

      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        dispatch({
          type: actions.profile.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCHED_ERRR,
          error: error.message,
        });

        console.error(error);
      }
    };

    fetchProfile();
  }, []);


  
  if (state?.loading) {
    return <div>Loading Profile ...</div>;
  }
  return (
    <>
      <ProfileInfo/>
      <MyPosts/>
    </>
  );
};

export default ProfilePage;
