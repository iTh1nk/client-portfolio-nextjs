import React, { useState } from "react";

interface Props {}

const RightPosts: React.FunctionComponent<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div>
      <div className="mb-8">
        <div className="font-semibold text-2xl">Welcome Home</div>
        <div className="py-2 text-gray-500 text-sm">September 2020 20:20</div>
        <div className="font-mono">
          Welcome to my new home! It is built with Next.js as frontend and Rust
          Actix handles backend.
        </div>
      </div>
      <div className="mb-8">
        <div className="font-semibold text-2xl">Welcome Home</div>
        <div className="py-2 text-gray-500 text-sm">September 2020 20:20</div>
        <div className="font-mono">
          Welcome to my new home! It is built with Next.js as frontend and Rust
          Actix handles backend.
        </div>
      </div>
    </div>
  );
};

export default RightPosts;
