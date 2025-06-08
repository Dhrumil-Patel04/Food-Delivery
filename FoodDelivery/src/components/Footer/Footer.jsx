import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            deserunt recusandae itaque fugit dolores repudiandae at magni maxime
            eos, ipsum repellendus earum ex reprehenderit assumenda nobis
            voluptatem possimus excepturi quaerat officia rerum, perspiciatis
            unde veritatis laborum libero. Nobis, amet iste sunt ipsum, deleniti
            optio ipsam asperiores exercitationem, nemo officiis quia.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUGH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tometo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyrighht 2024 &copy; Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
