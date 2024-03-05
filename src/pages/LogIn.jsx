import "../styles/Login.css";
import { EmptyHeight } from "../components/EmptyHeight";
import { useState } from "react";
import { userLogin } from "../api";
import { authenticate } from "../store/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [loginStatus, setLoginStatus] = useState(false);
  const dispatch = useDispatch();

  // const checkAuth = async () => {
  //   try {
  //     const isAuthorised = await checkAuthorisation();
  //     console.log("isAuthorised", isAuthorised);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const login = async () => {
    try {
      const result = await userLogin(email, password);
      if (result) {
        dispatch(authenticate(true));
        // setLoginStatus(true);
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <EmptyHeight height={8} />
        <input
          type="password"
          placeholder="Password"
          className="input"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <EmptyHeight height={40} />
        <button className="submit-cta" type="submit" onClick={login}>
          {"Login"}
        </button>
        <button
          className="submit-cta"
          type="submit"
          onClick={() => navigate("/signup")}
        >
          {"Create Account"}
        </button>
        {/* {loginStatus ? (
          <button className="submit-cta" type="submit" onClick={checkAuth}>
            {"Check Auth"}
          </button>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};
