import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";

export const FirstMateHead = () => {
  return (
    <Head>
      <title>FirstMate</title>
      <meta
        name="description"
        content="Creating products and tools for NFT Creators"
      ></meta>
      <link rel="icon" href="https://firstmate.xyz/Favicon.png"></link>
      <meta name="og:title" content="FirstMate for NFT Creators"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:locale" content="en"></meta>
      <meta
        property="og:description"
        content="Your collection deserves its own marketplace."
      ></meta>
      <meta property="og:url" content="https://firstmate.xyz"></meta>
      <meta
        property="og:image"
        content="https://firstmate.xyz/meta_image.png"
      ></meta>
      <meta property="og:image:type" content="image/png"></meta>
      <meta property="og:image:width" content="1600"></meta>
      <meta property="og:image:height" content="836"></meta>
    </Head>
  );
};

export const ProjectHeader: FC = () => {
  return (
    <>
      <HeaderWrapper>
        <ProjectTitleText>NFT Marketplace: Buy, Sell, Browse</ProjectTitleText>
      </HeaderWrapper>
    </>
  );
};

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 25px 0px;
`;

export const ProjectTitleText = styled.div`
  font: small-caps bold 48px Helvetica, Verdana, sans-serif;
  color: #262626;
  padding: 25px 10%;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
`;
