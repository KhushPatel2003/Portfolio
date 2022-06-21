import Image from "next/image";

import colors from "../constants/colors.ts";
import ListSeperator from "./listSeperator";
import portrait from "../public/KhushTransparent.jpeg";
import ocean from "../public/ocean.jpeg";
import pinkTree from "../public/pinkTree.jpeg";
import patio from "../public/patio.jpeg";

const AboutMe = () => {
  const imgArr = [ocean, pinkTree, patio];
  let random = Math.floor(Math.random() * 3);

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
            src={imgArr[random]}
            alt="Picture of Khush Patel"
            width={3024 / 9}
            height={4032 / 9}
            className="image"
          />
        </div>
        <div className="textHolder">
          <p className="text">
            Hey! My name’s Khush Patel and I am currently a Software Engineer at
            Foodi! I am 18 years old and a computer engineering student at the
            University of Waterloo. I am originally from India but currently
            reside in the maple syrup capital of the world, Canada! Growing up
            I’ve always been curious about topics in the engineering and tech
            field, compiling me to study Computer Engineering. Although I may
            not know where my educational journey will take me, I will be
            pursuing what I love and hopefully meeting some cool people along
            the way!
            <br></br>
            <br></br>
            Proin vulputate, leo malesuada efficitur faucibus, est nisl mattis
            justo, eget scelerisque magna orci aliquam mi. Morbi molestie
            vehicula massa, et finibus magna lobortis nec. Aliquam id est lorem.
            Morbi viverra lacus eget vestibulum interdum. Aenean eu rutrum nisi.
            Duis condimentum velit nunc, ac porttitor libero hendrerit eu.
            Vivamus nibh metus, gravida eget porta ac, dictum vel mi. Nulla
            vulputate leo at ipsum tempus dictum. Curabitur arcu neque, sodales
            ut cursus non, fringilla sit amet mi. Aenean malesuada lorem nec
            erat egestas fringilla. Proin eu justo convallis, congue est sed,
            posuere mi. Integer hendrerit ornare tortor at elementum. Phasellus
            interdum luctus dui ac efficitur. Quisque pharetra elementum mauris,
            sed tempus lorem laoreet non. Proin lacinia fermentum augue, a
            imperdiet purus commodo faucibus.
            <br></br>
            <br></br>
            Ut consequat pulvinar aliquam. In vel porttitor ligula. Duis
            interdum molestie sem id rutrum. Nullam eu lacus eget tortor
            imperdiet semper id pharetra ipsum. Suspendisse accumsan at est sit
            amet cursus. In suscipit suscipit nibh id egestas. Duis porta
            fermentum diam, ut tristique nisi lacinia in. Proin consectetur
            consequat mauris sit amet faucibus. Duis commodo bibendum suscipit.
            Donec ut odio sollicitudin, fringilla ex faucibus, vestibulum metus.
            Duis et ante vel nulla commodo dictum vitae eu ante. Curabitur vitae
            enim eget mauris iaculis vulputate. Curabitur dictum orci et
            scelerisque venenatis. Etiam imperdiet turpis odio, ut elementum dui
            condimentum in. Vestibulum et massa ligula.
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
