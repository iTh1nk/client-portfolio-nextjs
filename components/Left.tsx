import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faEnvelope,
  faFolder,
  faMapMarker,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Category = styled.div(() => [tw`mt-3`]);
const SubCategory = styled.div(() => [tw`ml-3`]);
const Title = styled.div(() => [tw`py-2 font-semibold text-lg`]);
const SubTitle = styled.span(() => [tw`text-gray-600 ml-3 text-sm`]);
const SubDiv = styled.div(() => [tw`mb-1`]);

interface Props {
  expand: boolean;
  cb: () => void;
}

const Left: React.FunctionComponent<Props> = ({ expand, cb }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {/* Profile Picture and Title */}
      <div className="text-center md:text-left">
        <img
          className="w-24 h-24 md:w-40 md:h-40 rounded-we shadow-we m-auto md:m-0"
          src="profile.png"
          alt="Profile Image"
        />
        <div className="mt-2 font-semibold text-2xl">Chao Feng</div>
        <div className="text-gray-600 italic text-sm">Full Stack Developer</div>
        <div
          onClick={() => cb()}
          className="mt-3 cursor-pointer inline-block md:hidden"
        >
          Expand{" "}
          {expand ? (
            <FontAwesomeIcon icon={faAngleDoubleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          )}
        </div>
      </div>
      {/* Information Under Profile Picture */}
      <div
        className={
          (expand ? " opacity-100 duration-500 " : " duration-300 opacity-0 ") +
          "mt-3 md:visible md:opacity-100 md:duration-75"
        }
      >
        <Category>
          <Title>Projects</Title>
          <SubCategory>
            <SubDiv>
              <FontAwesomeIcon icon={faFolder} />
              <SubTitle>
                <a href="https://vzw.we0mmm.site/">Bill Book</a>
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faFolder} />
              <SubTitle>Bill Book</SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faFolder} />
              <SubTitle>Bill Book</SubTitle>
            </SubDiv>
          </SubCategory>
        </Category>
        <Category>
          <Title>About</Title>
          <SubCategory>
            <SubDiv>
              <FontAwesomeIcon icon={faGithub} />
              <SubTitle>
                <a href="https://github.com/iTh1nk">Github</a>
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faLinkedin} />
              <SubTitle>
                <a href="https://www.linkedin.com/in/chaofeng16/">LinkedIn</a>
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faMapMarker} />
              <SubTitle>
                {" "}
                <a href="https://goo.gl/maps/CGy8mmSajrxYQSNu6">Irvine, CA</a>
              </SubTitle>
            </SubDiv>
          </SubCategory>
        </Category>
        <Category>
          <Title>Contact</Title>
          <SubCategory>
            <SubDiv>
              <FontAwesomeIcon icon={faTwitter} />
              <SubTitle>
                <a href="https://twitter.com/_ith1nk">Twitter</a>
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <SubTitle>
                <a href="https://www.facebook.com/iTh1nk">Facebook</a>
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faEnvelope} />
              <SubTitle>
                <a href="mailto:fnchao@hotmail.com">Email</a>
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faPaperPlane} />
              <SubTitle>
                <a href="">Message</a>
              </SubTitle>
            </SubDiv>
          </SubCategory>
        </Category>
      </div>
    </>
  );
};

export default Left;