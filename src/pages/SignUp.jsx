import "../styles/SignUp.css";
import { EmptyHeight } from "../components/EmptyHeight";
import { useState } from "react";
import { createUser } from "../api";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    const user = await createUser({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    if (!user) {
    } else {
      navigate("/login");
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <input
          type="name"
          placeholder="Name"
          className="input"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <EmptyHeight height={8} />
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
        <EmptyHeight height={8} />
        <input
          type="password"
          placeholder="Confirm passoword"
          className="input"
          name="cpassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <EmptyHeight height={40} />
        <button className="submit-cta" type="submit" onClick={createAccount}>
          {"Create Account"}
        </button>
        <button
          className="submit-cta"
          type="submit"
          onClick={() => navigate("/login")}
        >
          {"Login"}
        </button>
      </div>
    </div>
  );
};
