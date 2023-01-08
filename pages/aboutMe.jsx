import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import ocean from "../public/ocean.jpeg";
import pinkTree from "../public/pinkTree.jpeg";
import patio from "../public/patio.jpeg";
import taco from "../public/taco.jpeg";
import skiing from "../public/skiing.jpeg";
import lavell from "../public/lavell.jpeg";
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const imgArr = [lavell, skiing, taco, patio, pinkTree, ocean];
  const [count, setCount] = React.useState(0);
  const [image, setImage] = React.useState(imgArr[count]);

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
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            width: 3024 / 9,
            height: 4032 / 9,
          }}
        >
          <Image
            src={image}
            alt="Picture of Khush Patel"
            width={3024 / 9}
            height={4032 / 9}
            className="image"
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: colors.main.black,
              color: colors.main.backGroundColor,
              border: "none",
              paddingRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setCount((count) => count - 1);
              if (count < 0) {
                setCount(5);
                setImage(imgArr[5]);
              } else {
                setImage(imgArr[count]);
              }
            }}
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
            onClick={() => {
              setCount((count) => count + 1);
              if (count > imgArr.length - 1) {
                setCount(0);
                setImage(imgArr[0]);
              } else {
                setImage(imgArr[count]);
              }
            }}
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
            TradeRev 🧑🏾‍💻! I am 19 years old and a computer engineering student at
            the University of Waterloo📚. I am originally from India but
            currently reside in Canada 🇮🇳 -> 🇨🇦! Growing up I’ve always been
            curious about topics in the engineering and tech field 🧑🏾‍🔧, compiling
            me to study Computer Engineering 🛠️💻. Although I may not know where
            my educational journey will take me, I will be pursuing what I love
            and hopefully meeting some cool people along the way 🌎!
            <br></br>
            <br></br>
            Outside of school and work, I am a fan of the outdoors 🏕️! I enjoy
            going for runs 🏃🏾‍♂️, hiking 🥾 and basketball 🏀. I also love to cook
            and try new foods 🧑🏾‍🍳. Growing up as a vegetarian was an interesting
            experience 🥦. I always felt like I was a little bit different than
            my friends who ate meat, and I often had to be creative with my
            meals to ensure that I was getting enough nutrients 🥣. As I got
            older, I began to explore new foods and learned about different
            cuisines that had a lot of vegetarian options 🗺️ 🍽️. It was exciting
            to discover new flavors and textures, and I enjoyed learning about
            the cultural and historical significance of the dishes I was trying.
            Despite being a vegetarian, I have always been open to trying new
            foods and expanding my culinary horizons.
            <br></br>
            <br></br>I am also a big fan of music 🎶! I enjoy listening to a
            wide variety of genres, but I am particularly fond of hip-hop, rap
            and R&B 🎧. I think that music has a way of transporting you to a
            different place. I think that music is a great way to express
            yourself and share your emotions with others. In addition to music,
            I also have a personal interest in skiing ⛷️. There is something
            about the feeling of gliding down the slopes and the rush of cold
            air on my face that I find exhilarating 💨. Skiing requires both
            physical and mental focus, and I find that it helps me to clear my
            mind and relax. Recently, I have also gotten into reading more 📖. I
            have always enjoyed reading, but I have been making a more concerted
            effort to set aside time for it in my life. Reading allows me to
            escape the daily grind and to relax, and I love getting lost in a
            good book 🧘🏾.
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
      `}</style>
    </div>
  );
};

export default AboutMe;
