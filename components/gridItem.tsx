/* eslint-disable @next/next/no-img-element */
import { NFTData } from "@/types/data";
import { paths } from "@reservoir0x/reservoir-sdk";
import { FC } from "react";
import styled from "styled-components";

export const Card: FC<{
  nft: NFTData;
  onClick?: () => void;
}> = ({ nft, onClick }) => {
  const token = nft.token;
  const market = nft.market;

  const showPrice = () => {
    let price: number = 0;
    let currency: string = "";
    let label: string = "";

    if (market.topBid?.price) {
      price = market.topBid.price.amount.native;
      currency = market.topBid.price.currency.symbol;
      label = "Current Bid: ";
    } else if (market.floorAsk.price) {
      price = market.floorAsk.price.amount.native;
      currency = market.floorAsk.price.currency.symbol;
      label = "Buy Now: ";
    } else {
      return (
        <PriceContainer>
          <LabelMediumSize> - </LabelMediumSize>
        </PriceContainer>
      );
    }

    return (
      <PriceContainer>
        <LabelMediumSize>{label}</LabelMediumSize>
        <NFTPrice>{price + " " + currency}</NFTPrice>
      </PriceContainer>
    );
  };

  return (
    <GridItemContainer onClick={onClick}>
      <CardContent>
        <CardContentTop>
          <ImageContainer>
            <GridItemImage src={token.imageSmall} alt=""></GridItemImage>
          </ImageContainer>
        </CardContentTop>
        <CardContentBottom>
          <TextContainer>
            <NFTName>{token.name}</NFTName>
            <NFTDescription>{token.description}</NFTDescription>
          </TextContainer>
          {showPrice()}
        </CardContentBottom>
      </CardContent>
    </GridItemContainer>
  );
};

export const GridItemContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 50vh;
  border-radius: 10px 10px 0px 0px;

  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 7px 7px rgba(0, 0, 0, 0.05),
      0px 6px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const CardContent = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-family: Helvetica, Verdana, sans-serif;
`;

export const CardContentTop = styled.div`
  position: relative;
  height: 70%;
  padding: 5%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px 10px 0px 0px;
`;

export const CardContentBottom = styled.div`
  position: relative;
  height: 25%;
  background-color: rgba(0, 0, 0, 1);
  display: block;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  height: 100%;
`;

export const GridItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  position: relative;
  padding: 5px 5%;
  color: rgba(255, 255, 255, 1);
`;

export const NFTName = styled.p`
  font: bold 14px Helvetica, Verdana, sans-serif;
  margin: 5px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NFTDescription = styled.p`
  font: 12px Helvetica, Verdana, sans-serif;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0px;
  color: rgba(255, 255, 255, 0.8);
`;

export const NFTPrice = styled.p`
  font-size: 22px;
  margin: 0px;
  color: rgba(255, 255, 255, 1);
`;

export const LabelMediumSize = styled.p`
    font-size: 18px;
    margin 0px;
    color: rgba(255, 255, 255, 0.6);
`;

export const PriceContainer = styled.span`
  display: flex;
  padding: 5% 12% 0%;
  align-items: center;
  justify-content: space-evenly;
`;
