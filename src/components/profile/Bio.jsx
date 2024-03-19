import React, { useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import EditIcon from "../../assets/icons/edit.svg";
import useAxiosAuthentication from "../../hooks/useAxiosAuthentication";
import { actions } from "../../actions";
import useAuth from "../../hooks/useAuth";

const Bio = () => {
  const { state, dispatch } = useProfile();
  const auth = useAuth();
  const api = useAxiosAuthentication();
  const [bio, setBio] = useState(auth?.auth?.user?.bio ?? state?.user?.bio);
  const [editMode, setEditMode] = useState(false);


  const handleBioEdit = async () => {
    dispatch({
      type: actions.profile.DATA_FETCHING,
    });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });

        setEditMode(false);
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: actions.profile.DATA_FETCHED_ERRR,
        error: err.message,
      });
    }
  };
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            className=" p-2 leading-[-188W%] text-gray-600 lg:text-lg rounded-md"
            rows={4}
            cols={55}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>
      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-8 w-12 bg-green-500 font-bold rounded-lg hover:bg-green-400"
          onClick={handleBioEdit}
        >
          ✔
        </button>
      )}
    </div>
  );
};

export default Bio;
