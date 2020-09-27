import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface ContainerProps {
  title?: string;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div className=" py-10 px-6 md:px-24">
      <Head>
        <title>{title || "Ciao"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Web Body */}
      {children}
      {/* Web Body */}
    </div>
  );
};
