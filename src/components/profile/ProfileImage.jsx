import React, { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";
import useAxiosAuthentication from "../../hooks/useAxiosAuthentication";
import { actions } from "../../actions";
import useAuth from "../../hooks/useAuth";

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const api = useAxiosAuthentication();
  const auth = useAuth();

  const imageUploadRef = useRef();

  const handleImageUpload = async (e) => {
    e.preventDefault();
    imageUploadRef.current.click();
    imageUploadRef.current.addEventListener("change", updateProfileImage);
  };

  const updateProfileImage = async () => {
    try {
      const formData = new FormData();
      for (let file of imageUploadRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      dispatch({
        type: actions.profile.IMAGE_UPDATED,
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCHED_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div>
      <div className=" relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
       
       <div className="relative mb-8 max-h-[180px] max-w-[180px] overflow-hidden rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <img
          className="max-w-full rounded-full"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
          alt="User Image"
          />
          </div> 
        <form action="" onSubmit={handleImageUpload}>
          <button
            type="submit"
            className="flex-center absolute top-10 right-[-2rem] h-8 w-8 rounded-full font-bold bg-red-600 hover:bg-red-400"
          >
            <img  src={EditIcon} alt="Edit" /> 
          </button>
          <input type="file" id="file-upload" hidden ref={imageUploadRef} />
        </form>
      </div>
    </div>
  );
};

export default ProfileImage;
