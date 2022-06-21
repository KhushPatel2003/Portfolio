import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import SiteScope from "../public/SiteScopeLogo.PNG";
import Foodi from "../public/Foodi.PNG";

const Experiences = () => {
  const onPress = (link) => {
    window.open(link, "_blank");
  };

  const experiencesObject = [
    {
      title: "Software Engineer",
      company: "Foodi",
      location: "Niagara Falls, ON | Waterloo, ON",
      date: "May 2022 - Present",
      link: "https://www.joinfoodi.com",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      logo: {
        src: Foodi,
        alt: "Foodi Logo",
        width: 200 / 2,
        height: 200 / 2,
      },
    },
    {
      title: "Full Stack Developer",
      company: "SiteScope",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://sitescope.tech",
      disc: "‎Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      logo: {
        src: SiteScope,
        alt: "SiteScope Logo",
        width: 371 / 2,
        height: 150 / 2,
      },
    },
  ];

  return (
    <div className="container" id="myExp">
      <div className="header">
        <p className="header-text">My Experiences!</p>
      </div>

      <div className="line">
        <ListSeperator color={colors.main.black} />
      </div>

      <div className="experiences">
        {experiencesObject.map((experience) => {
          return (
            <div className="card">
              <div className="cardInner">
                <div className="img">
                  <Image
                    src={experience.logo.src}
                    alt={experience.logo.alt}
                    width={experience.logo.width}
                    height={experience.logo.height}
                  ></Image>
                </div>
                <p className="title">{experience.title}</p>
                <p className="date">{experience.date}</p>
                <div className="line" style={{ width: "40%" }}>
                  <ListSeperator color={colors.main.backGroundColor} />
                </div>
                <p
                  className="date"
                  style={{ width: "80%", paddingBottom: "25px" }}
                >
                  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ {experience.disc}
                </p>
              </div>
              <button
                className="btn"
                onClick={() => {
                  onPress(experience.link);
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
          background-color: ${colors.main.backGroundColor};
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
          color: ${colors.main.black};
        }
        .line {
          padding-top: 3%;
          padding-bottom: 3%;
          width: 30%;
        }
        .experiences {
          width: 100%;
          height: unset;
          display: grid;
          align-items: center;
          justify-items: center;
          max-width: 1500px;
          margin-bottom: -8%;
          z-index: 1;
        }
        .card {
          margin: 10px 10px;
          width: 400px;
          height: 500px;
          background-color: ${colors.main.black};
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
          background-color: ${colors.main.black};
          border-radius: 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .title {
          color: ${colors.main.backGroundColor};
          font-weight: 100;
          font-size: 25px;
          padding-top: 15px;
        }
        .date {
          font-size: 15px;
          color: ${colors.main.backGroundColor};
          font-weight: 100;
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
          color: ${colors.main.backGroundColor};
        }

        .btn::before {
          content: "";
          width: 0;
          height: 300%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: ${colors.main.backGroundColor};
          transition: 0.5s ease;
          display: block;
          z-index: -1;
        }

        .btn:hover::before {
          width: 105%;
        }

        .btn:hover {
          color: #111;
        }

        .slantedDivA {
          width: 100%;
          height: 200px;
          position: relative;
          background-color: ${colors.main.backGroundColor};
          // z-index: -1;
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
          transform-origin: top right;
          transform: skewY(-4deg);
        }
        .img {
          margin-top: 30px;
        }
        @media (min-width: 900px) {
          .experiences {
            grid-template-columns: repeat(2, 0.4fr);
            align-items: center;
            justify-items: center;
            justify-content: center;
            align-content: center;
            padding: 10px;
            margin-bottom: -8%;
          }
        }
        // @media (min-width: 1500px) {
        //   .experiences {
        //     grid-template-columns: repeat(3, 0.4fr);
        //     align-items: center;
        //     justify-items: center;
        //     justify-content: center;
        //     align-content: center;
        //     padding: 10px;
        //     margin-bottom: -8%;
        //   }
        // }
      `}</style>
    </div>
  );
};

export default Experiences;
