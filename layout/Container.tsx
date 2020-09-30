import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

interface ContainerProps {
  title?: string;
  content?: string;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  title,
  content,
}) => {
  return (
    <div>
      <Head>
        <title>{title || "Ciao"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={content || "Welcome to my personal website!"}
        />
      </Head>

      <div className="">{children}</div>
    </div>
  );
};
