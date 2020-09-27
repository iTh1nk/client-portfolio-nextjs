import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
const SubTitle = styled.span(() => [tw`text-gray-600 ml-3`]);
const SubDiv = styled.div(() => [tw`mb-2`]);

interface Props {}

const Left: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {/* Profile Picture and Title */}
      <div>
        <div>
          <img
            className="w-40 h-40 rounded-we shadow-we"
            src="profile.png"
            alt="Profile Image"
          />
        </div>
        <div className="mt-3 font-semibold text-2xl">Chao Feng</div>
        <div className="text-gray-600 italic text-sm">Full Stack Developer</div>
      </div>
      {/* Information Under Profile Picture */}
      <div className="mt-6">
        <Category>
          <Title>Projects</Title>
          <SubCategory>
            <SubDiv>
              <FontAwesomeIcon icon={faFolder} />
              <SubTitle>Bill Book</SubTitle>
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
              <SubTitle>Github</SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faLinkedin} />
              <SubTitle>LinkedIn</SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faMapMarker} />
              <SubTitle> Irvine, CA</SubTitle>
            </SubDiv>
          </SubCategory>
        </Category>
        <Category>
          <Title>Contact</Title>
          <SubCategory>
            <SubDiv>
              <FontAwesomeIcon icon={faTwitter} />
              <SubTitle>Twitter</SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <SubTitle>Facebook</SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faEnvelope} />
              <SubTitle>Email</SubTitle>
            </SubDiv>
            <SubDiv>
              <FontAwesomeIcon icon={faPaperPlane} />
              <SubTitle>Message</SubTitle>
            </SubDiv>
          </SubCategory>
        </Category>
      </div>
    </>
  );
};

export default Left;
