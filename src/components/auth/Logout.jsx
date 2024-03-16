import React from "react";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <button onClick={handleLogOut} className="icon-btn">
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};

export default Logout;
