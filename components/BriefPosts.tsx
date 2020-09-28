import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

interface Props {}

const BriefPosts: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="flex flex-col md:h-full justify-between">
      <div className="mb-8">
        <div className="font-semibold text-2xl">Welcome Home</div>
        <div className="py-2 text-gray-500 text-sm">September 2020 20:20</div>
        <div className="font-mono">
          Welcome to my new home! It is built with Next.js as frontend and Rust
          Actix handles backend.
        </div>
      </div>
      <div className="mr-5 flex justify-end">
        <Link href="/posts">
          <div className="duration-500 transform hover:translate-x-1 cursor-pointer">
            <span className="font-semibold">More </span>
            <FontAwesomeIcon className="" icon={faAngleDoubleRight} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BriefPosts;
