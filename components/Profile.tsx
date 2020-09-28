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
import Link from "next/link";

const Category = styled.div(() => [tw`mt-3 text-center md:text-left`]);
const SubCategory = styled.div(() => [tw`md:ml-3 m-auto`]);
const Title = styled.div(() => [tw`py-2 font-semibold text-lg`]);
const SubTitle = styled.span(() => [tw`text-gray-600 ml-3 text-sm`]);
const SubDiv = styled.div(() => [tw`mb-1`]);

interface Props {}

const Profile: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
      {/* Profile Picture and Title */}
      <div className="text-center md:text-left">
        <Link href="/">
          <img
            className="w-24 h-24 md:w-40 md:h-40 rounded-we shadow-we m-auto md:m-0 cursor-pointer"
            src="profile.png"
            alt="Profile Image"
          />
        </Link>
        <div className="mt-2 font-semibold text-2xl">Chao Feng</div>
        <div className="text-gray-600 italic text-sm">Full Stack Developer</div>
        <div
          onClick={() => setExpand(!expand)}
          className="mt-3 cursor-pointer inline-block md:hidden"
        >
          {expand ? (
            <span>
              Collapse <FontAwesomeIcon icon={faAngleDoubleUp} />
            </span>
          ) : (
            <span>
              Expand <FontAwesomeIcon icon={faAngleDoubleDown} />
            </span>
          )}
        </div>
      </div>
      {/* Information Under Profile Picture */}
      <div className={(expand ? " inline " : " hidden ") + "mt-3"}>
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

export default Profile;
