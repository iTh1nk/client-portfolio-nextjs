import React, { useState } from "react";
import BriefPosts from "./BriefPosts";
import Intro from "./Intro";

interface Props {}

const Right: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <div className="divide-y divide-gray-400">
        <div className="py-2 mb-3 mb:mb-6">
          <Intro />
        </div>
        <div className="py-10 md:py-8">
          <BriefPosts />
        </div>
      </div>
    </div>
  );
};

export default Right;
