import React, { useReducer } from "react";
import { initialState, profileReducer } from "../reducers/profileReducer";
import { profileContext } from "../context";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <profileContext.Provider value={{ state, dispatch }}>
      {children}
    </profileContext.Provider>
  );
};

export default ProfileProvider;
