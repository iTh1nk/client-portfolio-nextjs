import React, { useState } from "react";
import Posts from "./RightPosts";
import RightIntro from "./RightIntro";

interface Props {}

const Right: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <div className="divide-y divide-gray-400">
        <div className="py-2 mb-3 mb:mb-6">
          <RightIntro />
        </div>
        <div className="py-3 md:py-8">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Right;
