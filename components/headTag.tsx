import React from "react";
import Head from "next/head";
import { HeadTagProps } from "@/utils/interface";

const HeadTag: React.FC<HeadTagProps> = (props) => {
  const { headTitle } = props;
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
