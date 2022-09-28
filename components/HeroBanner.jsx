import React from "react";
import { urlFor } from "../lib/client";
import amarone from "../assets/amaroneb.png";
import Image from "next/image";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className="hero-banner-container">
        <img
          src={urlFor(heroBanner.image)}
          alt="wine"
          className="hero-banner-image"
        />
        <p className="text-banner">
          ONLY <br></br>ECLECTIC <br></br>WINE
        </p>

        <div className="amarone">
          <Image src={amarone}></Image>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
