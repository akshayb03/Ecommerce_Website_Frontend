import "../styles/Navbar.css";
import logo from "../assets/brand-logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/user";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToCart = () => {
    navigate("/cart");
  };

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  const goToHome = () => {
    navigate("/");
  };

  const logOut = () => {
    dispatch(authenticate(false));
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-brand">
          <img src={logo} alt="brand-logo" className="brand-image" />
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item" onClick={goToHome} onKeyDown={() => {}}>
              Home
            </li>
            <li className="nav-item" onClick={goToCart} onKeyDown={() => {}}>
              Cart
            </li>
            <li
              className="nav-item"
              onClick={goToWishlist}
              onKeyDown={() => {}}
            >
              Wishlist
            </li>
            <li className="nav-item" onClick={logOut} onKeyDown={() => {}}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
