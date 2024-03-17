import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosAuthentication from "../hooks/useAxiosAuthentication";

const ProfilePage = () => {
  const { auth } = useAuth();

  const { api } = useAxiosAuthentication();

  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await api.get(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
      );
    };
  }, []);

  return <div>Profile Page</div>;
};

export default ProfilePage;
