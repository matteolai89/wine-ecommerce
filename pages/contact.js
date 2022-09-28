import React from "react";
import Image from "next/image";
import grapes from "../assets/grapes.png";
import Map from "../components/Map";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Image className="contact-image" src={grapes}></Image>
        <h1>CONTACT US</h1>
        <div></div>
      </div>
      <div className="contact-info-container">
        <div className="contact-info">
          <h1>Email:</h1>
          <h2>quiparliamosolodivino@gmail.com</h2>
          <h1>Phone:</h1>
          <h2>+39 39393939</h2>
          <div className="address-info">
            <h1>Address:</h1>
            <h2>via Rossi 12 Nepi(VT) 01036</h2>
            {<Map />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
