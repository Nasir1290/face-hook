import React, { useEffect, useReducer } from "react";
import PostList from "../components/posts/PostList";
import { initialState, postsReducer } from "../reducers/postsReducer";
import { actions } from "../actions";
import useAxiosAuthentication from "../hooks/useAxiosAuthentication";

const HomePage = () => {
  const [state, dispatch] = useReducer(postsReducer, initialState);
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
          console.log(response.data);
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

  console.log(state);

  if (state.loading) {
    return <div>Loading....</div>;
  }
  if (state.error) {
    return <div> OOPS !! An Error Occured !!!!</div>;
  }


  return <>{!!state.posts && <PostList posts={state.posts} />}</>;
};

export default HomePage;
