// Import Section
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESET, RESET_PARAMETERS } from "../../redux/auth/auth.slice";

// Import Components
import { SignOut } from "../../components/index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Hooks Configuration
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/auth/sign-in");
    }

    dispatch(RESET);
    dispatch(RESET_PARAMETERS);
  }, [user, dispatch, navigate]);

  // JSX Component Return Section
  return (
    <div>
      Home Page
      <SignOut />
    </div>
  );
};

// Export Section
export { Home };
