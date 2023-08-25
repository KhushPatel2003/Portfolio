import Image from "next/image";
import {FaTelegramPlane} from "react-icons/fa";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import MoMoney from "../public/MoMoney.jpeg";
import EngHack from "../public/EngHack.png";
import Calc from "../public/Calc.png";
import GeeseSpotter from "../public/GeeseSpotter.png";
import vegetarian from "../public/vegetarian.png";
import ece198 from "../public/198.png";
import Weather from "../public/Weather.png";
import ProductPal from "../public/logo.png";

const Projects = () => {
  const onPress = (link) => {
    window.open(link, "_blank");
  };
  const projectObj = [
    {
      title: "Product Pal",
      location: "uOttawa",
      date: "Feb 2023",
      link: "https://github.com/KhushPatel2003/productpal",
      disc: "Product Pal. For your shopping frenzy. A shopping chrome extension that helps users discover suitable products by understanding their preferences. Created using GPT-3 (Davinci Text Model).",
      logo: {
        src: ProductPal,
        alt: "Foodi Logo",
        width: 300 / 3,
        height: 300 / 3,
        rounded: true,
        roundedRadius: "10px",
      },
    },
    {
      title: "Mo Money",
      location: "Niagara Falls, ON | Waterloo, ON",
      date: "May 2022 - Present",
      link: "https://github.com/KhushPatel2003",
      disc: "Calculating ACB gain and losses are incredibly important to finial institution such as the CRA. Thus but creating Mo Money, which generates documents for tax for the Canadian Revenue Agency (CRA). The program utilizes Classes, LinkedLists and dynamic memory allocation to calculate the gain/lose of ETFs. The program also sorts all transitions according to date.",
      logo: {
        src: MoMoney,
        alt: "Foodi Logo",
        width: 380 / 3,
        height: 260 / 3,
        rounded: true,
        roundedRadius: "10px",
      },
    },
    {
      title: "Vegetarian Element",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://github.com/KhushPatel2003",
      disc: "Coming from a background that promotes a vegetarian diet it was really hard for me to find suitable recipes that I could try out. Thus, I took it upon myself to create a web application that uses the Edamam search API to retrieve vegetarian recipes. The recipe tiles include calories, serving size, total time, ingredients, eat… The application was made using ReactJS, HTML, CSS and Javascript.",
      logo: {
        src: vegetarian,
        alt: "SiteScope Logo",
        width: 900 / 9,
        height: 900 / 9,
        rounded: true,
        roundedRadius: "30px",
      },
    },
    {
      title: "Geese Spotter",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://github.com/KhushPatel2003",
      disc: "Geese are part of Waterloo life! Everyone knows to not get too close to a goose, in particular a mother goose with her goslings. Geese Spotter is inspired off minesweeper where the user is presented with a board filled with “geese” (bombs) and the objective is to correctly find out where all the geese are at. The program was developed through bit shift manipulation and various helper functions.",
      logo: {
        src: GeeseSpotter,
        alt: "SiteScope Logo",
        width: 1000 / 10,
        height: 1000 / 10,
        rounded: true,
        roundedRadius: "30px",
      },
    },
    {
      title: "Weather Discord Bot",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://github.com/KhushPatel2003/Weather-Bot",
      disc: "Weather Discord Bot was made using the OpenWeatherAPI and Discord.py. The user can simply asks the bot about the weather in a certain city by prefixing the city name with “!“. The main objective of the bot was to learn how to use and implement APIs.",
      logo: {
        src: Weather,
        alt: "SiteScope Logo",
        width: 300 / 3,
        height: 300 / 3,
        rounded: true,
        roundedRadius: "20px",
      },
    },
    {
      title: "Binary Riddle",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://github.com/KhushPatel2003/Binary-Riddle",
      disc: " “Binary Riddle”, a twist on one of the many escape room puzzles designed to test individuals problem-solving skills. The program has 4 keys for the user to interact with, keys “1”, “0”, “delete” and “enter”. The user will use the 1 and 0 keys to enter the desired binary digits to solve the riddles, the delete key to modify the answer, and lastly, the enter key to check if their answer to the problem is correct. Binary Riddle was authored using classes, the Nucleo-64 STM32 Board, and 2D arrays.",
      logo: {
        src: ece198,
        alt: "SiteScope Logo",
        width: 1213 / 11,
        height: 800 / 11,
        rounded: false,
        roundedRadius: "0px",
      },
    },
    {
      title: "EngHack",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://github.com/KhushPatel2003/MyFitnessLog",
      disc: "During the 3 day hackathon me and my team collaborated to make a fitness tracking program called “My Fitness Log”. Throughout the 3 days we created a python application, a sigma design for our website to promote the product, and lastly a functioning website to display our finished product.",
      logo: {
        src: EngHack,
        alt: "SiteScope Logo",
        width: 598 / 6,
        height: 598 / 6,
        rounded: true,
        roundedRadius: "30px",
      },
    },
    {
      title: "Calculator Discord Bot",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://github.com/KhushPatel2003",
      disc: "Calculator Discord Bot was made using Discord.py. The bot can do simple         calculations ranging from addition to cubing a number. The user can call         the bot by prefixing the calculation with !math_”type of calculation”.",
      logo: {
        src: Calc,
        alt: "SiteScope Logo",
        width: 400 / 4,
        height: 400 / 4,
        rounded: true,
        roundedRadius: "20px",
      },
    },
  ];

  return (
    <div className="container" id="myProj">
      <div className="header">
        <p className="header-text">My Projects!</p>
      </div>

      <div className="line">
        <ListSeperator color={colors.main.backGroundColor} />
      </div>

      <div className="projects">
        {projectObj.map((projects) => {
          return (
            <div className="card">
              <div className="cardInner">
                <div
                  className="img"
                  style={{
                    borderRadius: projects.logo.rounded
                      ? projects.logo.roundedRadius
                      : 0,
                    width: projects.logo.width,
                    height: projects.logo.height,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={projects.logo.src}
                    alt={projects.logo.alt}
                    width={projects.logo.width}
                    height={projects.logo.height}
                  ></Image>
                </div>
                <p className="title">{projects.title}</p>
                <p className="date">{projects.date}</p>
                <div className="line" style={{width: "40%"}}>
                  <ListSeperator color={colors.main.black} />
                </div>
                <p
                  className="date"
                  style={{width: "80%", paddingBottom: "25px"}}
                >
                  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ {projects.disc}
                </p>
              </div>
              <button
                className="btn"
                onClick={() => {
                  onPress(projects.link);
                }}
              >
                Learn More! ‎ <FaTelegramPlane />
              </button>
            </div>
          );
        })}
      </div>
      <div className="slantedDivA"></div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
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
          padding-top: 8%;
        }
        .header-text {
          color: ${colors.main.backGroundColor};
        }
        .line {
          padding-top: 3%;
          padding-bottom: 3%;
          width: 30%;
        }
        .projects {
          width: 100%;
          height: unset;
          display: grid;
          align-items: center;
          justify-items: center;
          max-width: 1500px;
          z-index: 1;
          // background-color: red;
        }
        .card {
          margin: 10px 10px;
          width: 375px;
          height: 500px;
          background-color: ${colors.main.backGroundColor};
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-bottom: 30px;
        }
        .cardInner {
          width: 100%;
          height: 80%;
          background-color: ${colors.main.backGroundColor};
          border-radius: 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .title {
          color: ${colors.main.black};
          font-weight: 200;
          font-size: 25px;
          padding-top: 15px;
        }
        .date {
          font-size: 15px;
          color: ${colors.main.black};
          font-weight: 200;
          padding-top: 5px;
        }
        .btn {
          padding: 0.8em 1.8em;
          border: none;
          position: relative;
          overflow: hidden;
          background-color: transparent;
          text-align: center;
          font-size: 16px;
          transition: 0.3s;
          z-index: 1;
          font-family: inherit;
          color: ${colors.main.black};
        }

        .btn::before {
          content: "";
          width: 0;
          height: 300%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: ${colors.main.black};
          transition: 0.5s ease;
          display: block;
          z-index: -1;
        }

        .btn:hover::before {
          width: 105%;
        }

        .btn:hover {
          color: ${colors.main.backGroundColor};
        }

        .slantedDivA {
          margin-top: 5.5%;
          width: 100%;
          height: 200px;
          position: relative;
          background-color: ${colors.main.black};
          z-index: 1;
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

        @media (min-width: 900px) {
          .projects {
            grid-template-columns: repeat(2, 0.4fr);
            align-items: center;
            justify-items: center;
            justify-content: center;
            align-content: center;
            padding: 10px;
            margin-bottom: -8%;
          }
        }
        @media (min-width: 1500px) {
          .projects {
            grid-template-columns: repeat(3, 0.4fr);
            align-items: center;
            justify-items: center;
            justify-content: center;
            align-content: center;
            padding: 10px;
            margin-bottom: -8%;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
