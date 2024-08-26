import Image from "next/image";
import {FaTelegramPlane} from "react-icons/fa";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import vegetarian from "../public/vegetarian.png";
import ece198 from "../public/198.png";
import ProductPal from "../public/logo.png";
import CodeStake from "../public/CodeStake.png";
import Watolink from "../public/WATOLINK.jpeg";

const Projects = () => {
  const onPress = (link) => {
    window.open(link, "_blank");
  };
  const projectObj = [
    {
      title: "CodeStake",
      company: "CodeStake",
      location: "",
      date: "",
      link: "https://codestake.ca",
      disc: "Created a competitive coding platform, enabling users to engage in real-time coding challenges using Next.Js, Node & GCP. Amplified user security by implementing Google OAuth and utilized a Firestore database to store user information",
      logo: {
        src: CodeStake,
        alt: "CodeStake Logo",
        width: 174 / 1.5,
        height: 89 / 1.5,
      },
    },
    {
      title: "Team Member",
      company: "WATOLINK",
      location: "",
      date: "",
      link: "https://www.watolink.ca",
      disc: "Univeristy of Waterloo's neurotech design team. Worked with BCI Gaming team to develop a Unity game with blink-based movement control using EEG signals.",
      logo: {
        src: Watolink,
        alt: "Watolink Logo",
        width: 200 / 2,
        height: 200 / 2,
      },
    },
    {
      title: "Product Pal",
      location: "",
      date: "",
      link: "https://github.com/KhushPatel2003/productpal",
      disc: "Product Pal. For your shopping frenzy. A shopping chrome extension that helps users discover suitable products by understanding their preferences.",
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
      title: "Vegetarian Element",
      location: "",
      date: "",
      link: "https://github.com/KhushPatel2003",
      disc: "Faced with difficulty finding suitable vegetarian recipes, built a web application that uses the Edamam search API to retrieve vegetarian recipes. The app displays recipe tiles with calories, serving size, total time, and ingredients, created using ReactJS.",
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
      title: "Binary Riddle",
      location: "",
      date: "",
      link: "https://github.com/KhushPatel2003/Binary-Riddle",
      disc: " Created “Binary Riddle,” a twist on escape room puzzles designed to test problem-solving skills. The program features 4 keys—“1,” “0,” “delete,” and “enter”—allowing users to input binary digits to solve riddles, modify answers, and check correctness. Developed using the Nucleo-64 STM32 Board",
      logo: {
        src: ece198,
        alt: "SiteScope Logo",
        width: 1213 / 11,
        height: 800 / 11,
        rounded: false,
        roundedRadius: "0px",
      },
    }
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
          height: 415px;
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
