import React, { useEffect, useState } from "react";
import "../styles/Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div class="nav_content">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
