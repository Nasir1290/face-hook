import React from "react";
import Logo from "../assets/images/logo.svg";
import HomeIcon from "../assets/icons/home.svg";
import Notification from "../assets/icons/notification.svg";
import Avatar from "../assets/images/avatars/avatar_1.png";
import Logout from "../components/auth/Logout";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const Header = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { state } = useProfile();
  const user = state?.user ?? auth?.user;

  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="./index.html">
            <img
              className="max-w-[100px] rounded-full lg:max-w-[130px]"
              src={Logo}
            />
          </a>

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={HomeIcon} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={Notification} alt="Notification" />
            </button>

            <Logout />

            <button
              onClick={() => navigate("/me")}
              className="flex-center !ml-8 gap-3"
            >
              <span className="text-lg font-medium lg:text-xl">
                {user?.firstName}  {user?.lastName}
              </span>
              <img
                className=" overflow-hidden h-[32px] w-[32px] lg:h-[44px] lg:w-[44px] rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
                alt=""
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
