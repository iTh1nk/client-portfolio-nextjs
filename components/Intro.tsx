import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  dataIntro: Intro;
}
type Intro = {
  title: string;
  content: string;
};

const Intro: React.FunctionComponent<Props> = ({ dataIntro }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [m0Counter, setM0Counter] = useState<number>(0);
  const router = useRouter();

  if (m0Counter === 6) router.push("/admin");

  return (
    <div>
      <div
        onClick={() => setM0Counter(m0Counter + 1)}
        className="font-mono font-bold text-3xl text-blue-500 cursor-default"
      >
        Ciao 👋
        {/* {dataIntro?.title} */}
      </div>
      <div className="">
        {/* <p>
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
        </p> */}
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{ __html: dataIntro?.content }}
        />
      </div>
    </div>
  );
};

export default Intro;
