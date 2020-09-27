import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

interface ContainerProps {
  title?: string;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div>
      <Head>
        <title>{title || "Ciao"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Web Body */}
      <div className="py-8 px-6 md:px-24">{children}</div>
      {/* Web Body */}
    </div>
  );
};
