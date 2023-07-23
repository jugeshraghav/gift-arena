import { useLocation } from "react-router";
import { LoginCard } from "../components/loginCard/LoginCard";
import { SignupCard } from "../components/signupCard/SignupCard";
import { ProfileCard } from "../components/profile/ProfileCard";

export const User = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" ? (
        <LoginCard />
      ) : location.pathname === "/signup" ? (
        <SignupCard />
      ) : (
        <ProfileCard />
      )}
    </>
  );
};
