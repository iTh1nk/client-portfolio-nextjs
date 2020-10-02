import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Profile from "../components/Profile";

interface ContainerProps {
  title?: string;
  content?: string;
  dataProps?: Array<Project>;
}
type Project = {
  id: string;
  title: string;
  content: string;
  created_at: Date;
};

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  title,
  content,
  dataProps,
}) => {
  return (
    <div>
      <Head>
        <title>{title || "Chao Feng"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={content || "Welcome to my personal website!"}
        />
      </Head>
      <div className="flex md:flex-row md:justify-center md:max-w-6xl md:m-auto py-8 px-6 md:px-20">
        <div className="md:w-2/5">
          <Profile dataProps={dataProps} />
        </div>
        <div className="md:w-full md:mt-0">{children}</div>
      </div>
    </div>
  );
};
