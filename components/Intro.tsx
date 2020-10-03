import React, { useState } from "react";

interface Props {}

const Intro: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <div className="font-mono mb-3 font-bold text-3xl text-blue-500">
        Ciao 👋
      </div>
      <div className="">
        <p>
          Welcome to my "HOME"! My name is Chao Feng. Here, you will find
          something about me!
        </p>
        <p>
          I'm a Full Stack Developer. Familiar with major languages and
          frameworks including MERN, Django, Spring, PostgresSQL, AWS
          deployment.
        </p>
        <p>
          I am currently looking for a full-time job. If want a talk, please
          reach out to me through 'Contact' section. Thanks.
        </p>
      </div>
    </div>
  );
};

export default Intro;
