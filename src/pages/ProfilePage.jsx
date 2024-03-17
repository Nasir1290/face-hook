import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosAuthentication from "../hooks/useAxiosAuthentication";

const ProfilePage = () => {
  const { auth } = useAuth();

  const api = useAxiosAuthentication();

  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);

        setPosts(response?.data?.posts);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading Profile ...</div>;
  }
  return (
    <div>
      {user?.firstName} {user?.lastName}
    </div>
  );
};

export default ProfilePage;
