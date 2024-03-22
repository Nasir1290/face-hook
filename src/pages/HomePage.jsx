import React, { useEffect, useReducer } from "react";
import PostList from "../components/posts/PostList";
import { initialState, postsReducer } from "../reducers/postsReducer";
import { actions } from "../actions";
import useAxiosAuthentication from "../hooks/useAxiosAuthentication";
import { usePost } from "../hooks/usePost";
import NewPost from "../components/posts/NewPost";

const HomePage = () => {
  const { state, dispatch } = usePost();

  const api = useAxiosAuthentication();
  useEffect(() => {
    dispatch({
      type: actions.posts.DATA_FETCHING,
    });

    const fetchingData = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.posts.DATA_FETCHED,
            posts: response.data,
          });
        }
      } catch (error) {
        console.log(error);

        dispatch({
          type: actions.posts.DATA_FETCHED_EROR,
          error: error,
        });
      }
    };

    fetchingData();
  }, []);

  if (state.loading) {
    return <div>Loading....</div>;
  }
  if (state.error) {
    return <div> OOPS !! An Error Occured !!!!</div>;
  }

  return (
    <>
      {!!state.posts && (
        <>
          <NewPost state={state}/>
          <PostList posts={state.posts} />
        </>
      )}
    </>
  );
};

export default HomePage;
