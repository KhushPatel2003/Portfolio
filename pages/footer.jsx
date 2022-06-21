import React, { Component } from "react";
import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="container" id="contactMe">
        <div className="header">
          <p className="header-text">Lets Get In Touch!</p>
        </div>
        <div className="line">
          <ListSeperator color={colors.main.black} />
        </div>
        <div className="content">
          <div className="email">
            <div className="icons">
              <FontAwesomeIcon
                icon={faMailBulk}
                height={"40px"}
                width={"40px"}
              />
            </div>
            <p className="text">k425pate@uwaterloo.ca</p>
          </div>
          <div className="phone">
            <div className="icons">
              <FontAwesomeIcon icon={faPhone} height={"35px"} width={"35px"} />
            </div>
            <p className="text">+1 (431)-998-8848</p>
          </div>
          <div className="map">
            <div className="icons">
              <FontAwesomeIcon icon={faMapPin} height={"35px"} width={"35px"} />
            </div>
            <p className="text">Niagara Falls, ON Canada</p>
          </div>
        </div>
        <div className="line" style={{ paddingBottom: "1%" }}>
          <ListSeperator color={colors.main.black} />
        </div>
        <div className="center" style={{ paddingBottom: "1%" }}>
          <div className="btn-1">
            <a href="/Résumé.pdf">
              <span style={{ position: "relative", zIndex: 3 }}>Résumé</span>
            </a>
          </div>
        </div>
        <section>
          <ul className="iconList">
            <li className="iconItem">
              <a
                href="https://www.instagram.com/_khush.patel/"
                className="iconLink"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  height={"70px"}
                  width={"70px"}
                />
              </a>
            </li>
            <li className="iconItem">
              <a
                href="https://www.linkedin.com/in/khush-patel-uw/"
                className="iconLink"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  height={"70px"}
                  width={"70px"}
                />
              </a>
            </li>
            <li className="iconItem">
              <a href="https://github.com/KhushPatel2003" className="iconLink">
                <FontAwesomeIcon
                  icon={faGithub}
                  height={"65px"}
                  width={"65px"}
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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
        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .phone,
        .email,
        .map {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 350px;
          height: 100px;
          background-color: ${colors.main.black};
          color: ${colors.main.backGroundColor};
          margin: 10px;
          border-radius: 10px;
        }
        .text {
          font-size: 20px;
          font-weight: 100;
          margin-left: 30px;
        }
        .icons {
          margin-left: 15px;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
        }
        .btn-1 {
          width: 300px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .btn-1 a {
          text-decoration: none;
          border: 2px solid #010100;
          padding: 15px;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
        }
        .btn-1 a::before {
          content: "";
          position: absolute;
          top: 5px;
          left: -2px;
          width: calc(100% + 6px);
          height: calc(100% - 10px);
          background-color: ${colors.main.backGroundColor};
          transition: all 0.5s ease-in-out;
          transform: scaleY(1);
        }
        .btn-1 a:hover::before {
          transform: scaleY(0);
        }
        .btn-1 a::after {
          content: "";
          position: absolute;
          left: 5px;
          top: -5px;
          width: calc(100% - 10px);
          height: calc(100% + 10px);
          background-color: ${colors.main.backGroundColor};
          transition: all 0.5s ease-in-out;
          transform: scaleX(1);
        }
        .btn-1 a:hover::after {
          transform: scaleX(0);
        }
        section {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${colors.main.backGroundColor};
          margin-bottom: 3%;
        }
        .iconList {
          width: 100%;
          max-width: 50rem;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          align-content: center;
          list-style: none;
        }
        .iconItem {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: center;
          justify-items: center;
        }
        .iconLink {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3rem;
          text-decoration: none;
          color: ${colors.main.black};
          width: 6rem;
          height: 6rem;
          transition: 0.5s linear;
          position: relative;
          z-index: 1;
          margin: auto;
        }
        .iconLink:hover {
          color: #fff;
        }
        .iconLink i {
          margin: auto;
        }
        .iconLink::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 6rem;
          height: 6rem;
          background: #000;
          border-radius: 50%;
          z-index: -1;
          transform: scale(0);
          transition: 0.3s cubic-bezier(0.95, 0.32, 0.37, 1.21);
        }

        .iconLink:hover::before {
          transform: scale(1);
        }

        .iconItem:nth-child(1) a:hover:before {
          background: #e4405f;
        }

        .iconItem:nth-child(2) a:hover:before {
          background: #3b5999;
        }

        .iconItem:nth-child(3) a:hover:before {
          background: ${colors.main.black};
        }
      `}</style>
    </div>
  );
};

export default Footer;
