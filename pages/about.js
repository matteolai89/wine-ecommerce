import Image from "next/image";
import React from "react";
import winery from "../assets/winery.png";
import bottiglia from "../assets/barolo.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <Image className="about-image" src={winery}></Image>
        <h1>The Best e-commerce for the Most extravagant wines.</h1>
      </div>
      <h2 className="about-title">
        This is our Culture Guide — who we are, what we do, & why we do it.
      </h2>
      <div className="text-about-container">
        <div className="about-text">
          <h2>Who Are We?</h2>
          <p>
            We are a group of young people having a vision in common: make known
            the most extravagant wines. We travel extensively each year to the
            wine-producing regions of the world, establishing relationships with
            winemakers and producers internationally, to expand both our
            knowledge of wine and our ability to bring you exceptional wines and
            exceptional values. Our own “Discoveries” are distinctive wines
            we’ve discovered in our travels … excellent wines that are
            unheralded by the wine critics and reviewers, and our volume of
            sales affords us the superior buying power to bring you popular
            selections at excellent prices as well.
          </p>
          <h2>Our Philosophy</h2>
          <p>
            We provide our guests a unique shopping experience by combining
            attentive service, a knowledgeable staff, carefully chosen products
            and competitive pricing to create the highest level of satisfaction.
            We strive to get to know our guests and their personal tastes. We
            are passionate about wine, beer, spirits and the related products
            that we sell. We visit the vineyards and get to know the winemakers.
            We work together as a cooperative team to give each guest a unique
            shopping experience. We want our guests to think of us as their
            personal wine advisers. We go directly to the source for unique
            finds in wine. We taste thousands of wines to bring you the ones
            that over-deliver. We extend this careful selection process to the
            wide range of spirits, craft beers, gourmet items and gifts we
            offer.
          </p>
        </div>
        <div className="barolo-container">
          <div className="bottiglia-container">
            <Image src={bottiglia}></Image>
          </div>
          <div className="text-barolo">
            <h1>Barolo D.O.C.G Nebbiolo</h1>
            <p>
              SORANUS, è un Barolo Docg prodotto con uve Nebbiolo, uve coltivate
              nelle zone più vocate della DOCG. Affinato in Legni Medi e Grandi
              per 24 mesi, regala profumi ed emozioni uniche.
            </p>
            <p>
              {" "}
              Dal colore rosso granato, con intense note di pepe nero,
              cioccolato cannella e vaniglia. Al palato è pieno e vigoroso, con
              una piacevole intensa tannicità, di grandissima longevità.
            </p>
            <p> 75 cl Servire alla temperatura di 18°-20° C.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
