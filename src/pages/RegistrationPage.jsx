import React from "react";
import RagistrationIcon from "../assets/icons/registration.svg";
import RegistrationForm from "../components/auth/RegistrationForm";
import { Link } from "react-router-dom";
const RegistrationPage = () => {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
        <div className="max-w-[1368px] flex-1">
          <div className="container grid items-center gap-8 lg:grid-cols-2">
            {/* <!-- illustration and title --> */}
            <div>
              {/* <!-- src="./assets/images/auth_illustration.png" --> */}
              <img
                className="mb-12 h-60"
                src={RagistrationIcon}
                alt="auth_illustration"
              />
              <div>
                <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                  Facehook
                </h1>
                <p className="max-w-[452px] text-gray-400/95 lg:text-lg">
                  Create a social media app with features like, showing the
                  post, post details, reactions, comments and profile.
                </p>
              </div>
            </div>
            <div className="card">
              {/* form */}
              <RegistrationForm />

              <div className="py-4 lg:py-4">
                <p className="text-center text-xs text-gray-400 lg:text-sm">
                  Already have an account? &nbsp;
                  <Link
                    className="hover:text-lwsGreen text-white transition-all font-bold hover:underline"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationPage;
