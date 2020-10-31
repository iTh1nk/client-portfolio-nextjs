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
import { format } from "date-fns";

const Category = styled.div(() => [tw`mt-3 text-center md:text-left`]);
const SubCategory = styled.div(() => [tw`md:ml-3 m-auto`]);
const Title = styled.div(() => [tw`py-2 font-semibold text-lg`]);
const SubTitle = styled.span(() => [
  tw`text-gray-600 ml-3 text-sm dark:text-gray-400`,
]);
const SubDiv = styled.div(() => [tw`mb-1`]);

interface Props {
  dataProps?: Array<Project>;
}

type Project = {
  id: string;
  title: string;
  content: string;
  created_at: Date;
};

const Profile: React.FunctionComponent<Props> = ({ dataProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
      {/* Profile Picture and Title */}
      <div className="text-center md:text-left">
        <Link href="/">
          <img
            className="w-24 h-24 md:w-40 md:h-40 rounded-we shadow-we m-auto md:m-0 cursor-pointer"
            src={
              format(new Date(), "MM-dd") === "10-31"
                ? "/halloween-avatar.png"
                : "/profile.png"
            }
            alt="Profile Image"
          />
        </Link>
        <div className="mt-2 font-semibold text-2xl">
          <Link href="/posts">Chao Feng</Link>
        </div>
        <div className="text-gray-600 italic text-sm cursor-default">
          Full Stack Developer
        </div>
        <div
          onClick={() => setExpand(!expand)}
          className="mt-3 cursor-pointer inline-block md:hidden we-animate-bounce"
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
      <div className={(expand ? " inline " : " hidden ") + "mt-3 md:inline"}>
        <Category>
          <Link href="/projects">
            <Title>
              <span className="cursor-pointer">Project</span>
            </Title>
          </Link>
          <SubCategory>
            {dataProps?.map((item) => (
              <SubDiv key={item.id}>
                <FontAwesomeIcon icon={faFolder} />
                <SubTitle>
                  <Link
                    href={`/projects/[projectId]`}
                    as={`/projects/${item.id}`}
                  >
                    <a>{item.title}</a>
                  </Link>
                </SubTitle>
              </SubDiv>
            ))}
          </SubCategory>
        </Category>
        <Category>
          <Title>
            <span className="cursor-default">About</span>
          </Title>
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
          <Title>
            <span className="cursor-default">Contact</span>
          </Title>
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
                <Link href="/message/">
                  <a>Message</a>
                </Link>
              </SubTitle>
            </SubDiv>
          </SubCategory>
        </Category>
      </div>
    </>
  );
};

export default Profile;
