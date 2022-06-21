import Image from "next/image";
import { Link } from "react-scroll";

import colors from "../constants/colors.ts";
import portrait from "../public/KhushTransparent.jpeg";
import steve from "../public/tmp.png";
import ListSeperator from "./listSeperator";
import signature from "../public/signature.png";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="navBar">
        <div className="about">
          <Link to="aboutMe" smooth={true} duration={1000}>
            About Me
          </Link>
        </div>
        <div className="work">
          <Link to="myExp" smooth={true} duration={1000}>
            Experiences
          </Link>
        </div>
        <div className="khushers">
          <Image src={signature}></Image>
        </div>
        <div className="project">
          <Link to="myProj" smooth={true} duration={1000}>
            Projects
          </Link>
        </div>
        <div className="contact">
          <Link to="contactMe" smooth={true} duration={1000}>
            Contact
          </Link>
        </div>
      </div>
      <div className="header">
        <p>Khush Patel</p>
      </div>
      <div className="text">
        <p>
          Software Engineer @ Foodi ‎ ‎ | ‎ ‎ 2A Computer Engineering student at
          the University of Waterloo
        </p>
      </div>
      <div className="line">
        <ListSeperator color={colors.main.black} />
      </div>
      <div className="image shadow">
        <Image
          src={steve}
          alt="Picture of Khush Patel"
          layout="fill"
          objectFit="scale-down"
        />
      </div>
      <style jsx>
        {`
          p {
            margin: 0px;
          }

          .container {
            padding: 0px;
            margin: 0px;
            width: 100%;
            height: 100vh;
            background-color: ${colors.main.backGroundColor};
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .navBar {
            // background-color: blue;
            width: 100%;
            height: 7%;
            display: flex;
            justify-content: center;
          }
          .about,
          .work,
          .khushers,
          .project,
          .contact {
            width: 10%;
            height: 100%;
            font-size: clamp(10px, 2.1vw, 30px);
            font-weight: 100;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
          .work {
            margin-left: 4%;
          }
          .project {
            margin-right: 4%;
          }
          .khushers {
            padding-top: 0.3%;
            margin: 0 10%;
          }
          .header {
            width: 100%;
            text-align: center;
            font-size: clamp(40px, 7vw, 85px);
            font-weight: 100;
            padding-top: 4%;
          }
          .text {
            width: 65%;
            text-align: center;
            padding-top: 1%;
            padding-bottom: 3%;
            font-size: clamp(8px, 1.15vw, 16px);
          }
          .line {
            width: 30%;
          }
          .image {
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 42%;
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
