/* eslint-disable @next/next/no-img-element */
import { NFTData } from "@/types/data";
import { paths } from "@reservoir0x/reservoir-sdk";
import { FC } from "react";
import styled from "styled-components";

export const ModalItem: FC<{
  nft: NFTData;
}> = ({ nft }) => {
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
    <ModalBody>
      <LeftContainer>
        <ImageContainer>
          <GridItemImage src={token.imageLarge} alt=""></GridItemImage>
        </ImageContainer>
        {/* TODO:
                    <NFTMainInfo>
                        {token.name} (big bold font)
                        {market.floorAsk.source}{token.maker}
                        {token.collection.name}
                        {token.description}
                    </NFTMainInfo>
                 */}
      </LeftContainer>
      {/* TODO:
            <RightContainer>
                 
            </RightContainer>
            */}
      {/* <CardContent>
                <CardContentTop>
                    
                </CardContentTop>
                <CardContentBottom>
                    <TextContainer>
                        <NFTName>{token.name}</NFTName>
                        <NFTDescription>{token.description}</NFTDescription>
                    </TextContainer>
                    {showPrice()}
                </CardContentBottom>
            </CardContent> */}
    </ModalBody>
  );
};

export const ModalBody = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  height: 95%;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 50%;
  width: 95%;
  padding: 15px;
`;

export const GridItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const LeftContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
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

export const CardContent = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-family: Helvetica, Verdana, sans-serif;
`;
