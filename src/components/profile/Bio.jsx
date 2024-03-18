import React, { useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import EditIcon from "../../assets/icons/edit.svg";
import useAxiosAuthentication from "../../hooks/useAxiosAuthentication";
const Bio = () => {
  const { state } = useProfile();
  const { api } = useAxiosAuthentication();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        <p className="leading-[188%] text-gray-400 lg:text-lg">
          {state?.user?.bio}
        </p>
      </div>
      {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
      <button className="flex-center h-7 w-7 rounded-full">
        <img src={EditIcon} alt="Edit" />
      </button>
    </div>
  );
};

export default Bio;
