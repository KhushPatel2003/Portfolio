import Image from "next/image";
import {FaTelegramPlane} from "react-icons/fa";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import SiteScope from "../public/SiteScopeLogo.PNG";
import Foodi from "../public/Foodi.png";
import Openlane from "../public/openlane.png";
import CodeStake from "../public/CodeStake.png";
import Genesys from "../public/genesys.png";
import Watolink from "../public/WATOLINK.jpeg";

const Experiences = () => {
  const onPress = (link) => {
    window.open(link, "_blank");
  };

  const experiencesObject = [
    {
      title: "Software Engineer",
      company: "Genesys",
      location: "Toronto, ON",
      date: "Sep 2023 - Dec 2023",
      link: "https://www.genesys.com",
      disc: "Anticipated to work with the WFM (Workforce Management) team leveraging AWS, Node, Typescript & Serverless.",
      logo: {
        src: Genesys,
        alt: "Genesys Logo",
        width: 200 / 2,
        height: 200 / 2,
      },
    },
    {
      title: "Software Engineer",
      company: "Openlane",
      location: "Toronto, ON",
      date: "Jan 2023 - Apr 2023",
      link: "https://www.openlane.ca/en/",
      disc: "Worked with the DEFCON team handeling the user-org & IAM microservices. Utilized technologies including Node, Typescript, AWS, Docker & Serverless. Designed and implemented an event processing system using AWS Lambda and SQS that streamlines 20K+ user events daily, decreasing processing times and resolving race conditions",
      logo: {
        src: Openlane,
        alt: "Openlane Logo",
        width: 200 / 2,
        height: 200 / 2,
      },
    },
    {
      title: "Team Member",
      company: "WATOLINK",
      location: "Waterloo, ON",
      date: "Jan 2023 - Aug 2023",
      link: "https://www.watolink.ca",
      disc: "Univeristy of Waterloo's neurotech design team aiming to develop applications involving action-classification via EEG signal analysis and inference. Worked with BCI Gaming team to develop a Unity game with blink-based movement control using EEG signals, advancing accessibility in gaming",
      logo: {
        src: Watolink,
        alt: "Watolink Logo",
        width: 200 / 2,
        height: 200 / 2,
      },
    },
    {
      title: "Co-Founder",
      company: "CodeStake",
      location: "Niagara Falls, ON",
      date: "May 2021 - Present",
      link: "https://codestake.ca",
      disc: "Co-founder of a free online platform that allows users to earn cryptocurrency through competitive programming. Added user security through the use of Google OAuth whilst storing user information in a Firestore database. Allowed users to connect to MetaMask cryptocurrency wallet through Web3 API to allow for smooth transactions. Acquired 50+ beta testers willing to foresee future development and features.",
      logo: {
        src: CodeStake,
        alt: "CodeStake Logo",
        width: 174 / 1.8,
        height: 89 / 1.8,
      },
    },
    {
      title: "Software Engineer",
      company: "Foodi",
      location: "Niagara Falls, ON | Waterloo, ON",
      date: "May 2022 - August 2022",
      link: "https://www.joinfoodi.com",
      disc: "Worked on a mobile app using React Native & Redux for frontend. AWS Amplify, DynamoDB, & GraphQL for backend. Implemented notifications from scratch and hosted the push notification service on AWS using Lambda functions, resulting in a 50% increase in user interaction. Implemented pagination on GraphQL queries leading to reduced load times by 20% and minimizing costs.",
      logo: {
        src: Foodi,
        alt: "Foodi Logo",
        width: 200 / 2,
        height: 200 / 2,
      },
    },
    {
      title: "Software Developer",
      company: "SiteScope",
      location: "Niagara Falls, ON",
      date: "May 2021 - August 2021",
      link: "https://sitescope.tech",
      disc: "Led the development of designing and developing the company’s website with ReactJs and Figma, hosted on Netlify. Worked closely with company to establish project guidelines and create project specifications via an agile methodology. Assisted the startup in accumulating 100+ users to gain feedback and insight on the service.",
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
                <div className="line" style={{width: "40%"}}>
                  <ListSeperator color={colors.main.backGroundColor} />
                </div>
                <p
                  className="date"
                  style={{width: "80%", paddingBottom: "25px"}}
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
          width: 375px;
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
