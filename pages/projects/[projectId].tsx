import React, { useState } from "react";
import Profile from "../../components/Profile";
import { Container } from "../../layout/Container";

interface Props {}

const Project: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Container title="Project 1">
      <div className="md:flex md:flex-row md:justify-center md:max-w-4xl md:m-auto">
        <div className="md:w-1/2">
          <Profile />
        </div>
        <div className="inline md:hidden">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="font-semibold text-2xl">Project 1</div>
        <div className="font-mono mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </Container>
  );
};

export default Project;
