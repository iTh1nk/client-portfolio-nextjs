import Link from "next/link";
import React, { useState } from "react";

interface Props {}

const ErrorNotFound: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className="text-center p-10">
      <div className="mb-10">
        <Link href="/">
          <a className="bg-blue-600 p-2 text-sm rounded-md">Back to Home</a>
        </Link>
        <div className="mt-5 font-bold text-xl cursor-default">
          Page Not Found...
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="rounded-md"
          src="/404.gif"
          alt="404"
          style={{ width: "360px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default ErrorNotFound;
