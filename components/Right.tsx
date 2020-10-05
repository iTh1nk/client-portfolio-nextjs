import React, { useState } from "react";
import BriefPosts from "./BriefPosts";
import Intro from "./Intro";

interface Props {
  dataProps: Array<Post>;
  dataIntro: IntroType;
}

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: Date;
};
type IntroType = {
  title: string;
  content: string;
};

const Right: React.FunctionComponent<Props> = ({ dataProps, dataIntro }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <div className="divide-y divide-gray-400">
        <div className="py-2 mb-3 mb:mb-6">
          <Intro dataIntro={dataIntro} />
        </div>
        <div className="py-10 md:py-8">
          <BriefPosts dataProps={dataProps} />
        </div>
      </div>
    </div>
  );
};

export default Right;
