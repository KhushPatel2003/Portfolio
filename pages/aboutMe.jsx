import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import banff from "../public/banff.JPG";
import beach from "../public/beach.jpeg";
import cabinIn from "../public/cabinIn.jpg";
import cabinOut from "../public/cabinOut.jpg";
import canoing from "../public/canoing.jpg";
import engDay from "../public/engDay.JPG";
import lake from "../public/lake.JPG";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const imgArr = [banff, beach, cabinOut, lake, cabinIn, canoing, engDay];
  const widthArr = [
    3024 / 5,
    3024 / 9,
    3024 / 5,
    3024 / 5,
    3024 / 5,
    3024 / 5,
    3024 / 5,
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgArr.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container" id="aboutMe">
      <div className="header">
        <p className="header-text">A Little About Me!</p>
      </div>

      <div className="line">
        <ListSeperator color={colors.main.backGroundColor} />
      </div>

      <div className="content">
        <div
          className="responsive-image"
          // style={{
          //   borderRadius: "10px",
          //   overflow: "hidden",
          //   width: widthArr[currentIndex],
          //   height: 4032 / 9,
          // }}
        >
          <Image
            src={imgArr[currentIndex]}
            alt="Picture of Khush Patel"
            width={widthArr[currentIndex]}
            height={4032 / 9}
            className="image"
          />
        </div>
        <div style={{marginTop: "20px"}}>
          <button
            style={{
              backgroundColor: colors.main.black,
              color: colors.main.backGroundColor,
              border: "none",
              paddingRight: "10px",
              cursor: "pointer",
            }}
            onClick={handlePrev}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              height={"30px"}
              width={"30px"}
            />
          </button>
          <button
            style={{
              backgroundColor: colors.main.black,
              color: colors.main.backGroundColor,
              border: "none",
              paddingLeft: "10px",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              height={"30px"}
              width={"30px"}
            />
          </button>
        </div>
        <div className="textHolder">
          <p className="text">
            Hey! My name’s Khush Patel and I am currently a Software Engineer at
            Genesys 🧑🏾‍💻! I am 20 years old and a computer engineering student at
            the University of Waterloo📚. I am originally from India but
            currently reside in Canada 🇮🇳 -> 🇨🇦! Growing up I’ve always been
            curious about topics in the engineering and tech field 🧑🏾‍🔧, compiling
            me to study Computer Engineering 🛠️💻. Although I may not know where
            my educational journey will take me, I will be pursuing what I love
            and hopefully meeting some cool people along the way 🌎!
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
      <div className="slantedDivA"></div>
      {/* https://www.youtube.com/watch?v=6QGOhCZLdhs */}
      <style jsx>{`
        p {
          margin: 0;
        }

        .container {
          width: 100%;
          height: unset;
          background-color: ${colors.main.black};
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .header {
          width: 100%;
          text-align: center;
          font-size: clamp(40px, 7vw, 85px);
          font-weight: 100;
          padding-top: 4%;
        }
        .header-text {
          color: ${colors.main.backGroundColor};
        }
        .line {
          padding-top: 3%;
          padding-bottom: 3%;
          width: 30%;
        }
        .content {
          width: 100%;
          height: unset;
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 9;
          margin-bottom: -8%;
        }
        .image {
          border-radius: 50%;
        }
        .textHolder {
          text-align: center;
          padding-top: 3%;
          padding-bottom: 3%;
          color: ${colors.main.backGroundColor};
          font-size: clamp(10px, 1.15vw, 16px);
          width: 80%;
        }
        .slantedDivA {
          width: 100%;
          height: 200px;
          position: relative;
          background-color: ${colors.main.black};
        }

        .slantedDivA:after {
          position: absolute;
          width: 100%;
          height: 100%;
          content: "";
          background: inherit;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform-origin: top left;
          transform: skewY(4deg);
        }
        .responsive-image {
          border-radius: 10px;
          overflow: hidden;
          width: ${widthArr[currentIndex]}px;
          height: 448px;
        }

        @media (max-width: 414px) {
          .responsive-image {
            border-radius: 10px;
            overflow: hidden;
            width: ${widthArr[currentIndex] / 2}px;
            height: 224px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
