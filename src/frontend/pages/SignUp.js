import { useContext } from "react";
import { AuthContext } from "../contexts/authenticationContext";
import "./signup.css";
export const SignUp = () => {
  const { signUpHandler, signUpDetails, setSignUpDetails } =
    useContext(AuthContext);
  return (
    <>
      <label htmlFor="signup-first-name">First Name:</label>
      <input
        id="signup-first-name"
        type="text"
        value={signUpDetails.firstName}
        onChange={(e) =>
          setSignUpDetails({ ...setSignUpDetails, firstName: e.target.value })
        }
      />
      <label htmlFor="signup-last-name">Last Name:</label>
      <input
        id="signup-last-name"
        type="text"
        value={signUpDetails.lastName}
        onChange={(e) =>
          setSignUpDetails({ ...setSignUpDetails, lastName: e.target.value })
        }
      />
      <label htmlFor="signp-eamil"> Email:</label>
      <input
        id="signup-email"
        type="email"
        value={signUpDetails.email}
        onChange={(e) =>
          setSignUpDetails({ ...setSignUpDetails, email: e.target.value })
        }
      />
      <label htmlFor="signup-pwd">Password:</label>
      <input
        id="signup-pwd"
        type="text"
        value={signUpDetails.password}
        onChange={(e) =>
          setSignUpDetails({ ...setSignUpDetails, password: e.target.value })
        }
      />
      <button onClick={signUpHandler}>Signup</button>
    </>
  );
};
