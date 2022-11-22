import React from "react";
import opptLogo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="oppt__footer section__padding">
    <div className="oppt__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before each others
      </h1>
    </div>

    <div className="oppt__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="oppt__footer-links">
      <div className="oppt__footer-links_logo">
        <img src={opptLogo} alt="oppt_logo" />
        <p>
          Capstone Project 1 of DTU UNIVERSITY, <br /> All Rights Reserved
        </p>
      </div>
      <div className="oppt__footer-links_div">
        <h4>Links</h4>
        <p>Overrall</p>
        <p>Social Media</p>
        <p>About us</p>
      </div>
      <div className="oppt__footer-links_div">
        <h4>Community</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="oppt__footer-links_div">
        <h4>Get in touch</h4>
        <p>03 Quang Trung</p>
        <p>(+84)236.141.911</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="oppt__footer-copyright">
      <p>@2022-2023 - OPPT PROJECT.</p>
    </div>
  </div>
);

export default Footer;
