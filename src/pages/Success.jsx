import { Player } from "@lottiefiles/react-lottie-player";
import SuccessLottie from "../assets/success-lottie.json";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Player
          src={SuccessLottie}
          style={{ width: 100, height: 100 }}
          loop
          autoplay
        />
        <p>Your order is placed successfully</p>
        <button
          style={{ width: "100%", height: 50 }}
          type="button"
          onClick={() => navigate("/")}
        >
          {"Return to home"}
        </button>
      </div>
    </div>
  );
};
