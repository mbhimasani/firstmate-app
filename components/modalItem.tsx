/* eslint-disable @next/next/no-img-element */
import { NFTData } from "@/types/data";
import { paths } from "@reservoir0x/reservoir-sdk";
import { FC } from "react";
import styled from "styled-components";
import { NFTDescription } from "./gridItem";

export const ModalItem: FC<{
  nft: NFTData;
}> = ({ nft }) => {
  const token = nft.token;
  const market = nft.market;

  // TODO: price should be displayed in a large div with:
  //  button to place bid if available, latest bid price with currency symbol, nft owner
  //  button to buy nft if available, floor ask price with currency symbol, nft owner
  // const showPrice = () => {
  //   let price: number = 0;
  //   let currency: string = "";
  //   let label: string = "";

  //   if (market.topBid?.price) {
  //     price = market.topBid.price.amount.native;
  //     currency = market.topBid.price.currency.symbol;
  //     label = "Current Bid: ";
  //   } else if (market.floorAsk.price) {
  //     price = market.floorAsk.price.amount.native;
  //     currency = market.floorAsk.price.currency.symbol;
  //     label = "Buy Now: ";
  //   } else {
  //     return (
  //       <PriceContainer>
  //         <LabelMediumSize> - </LabelMediumSize>
  //       </PriceContainer>
  //     );
  //   }

  //   return (
  //     <PriceContainer>
  //       <LabelMediumSize>{label}</LabelMediumSize>
  //       <NFTPrice>{price + " " + currency}</NFTPrice>
  //     </PriceContainer>
  //   );
  // };

  return (
    <ModalBody>
      <LeftContainer>
        <ImageContainer>
          <GridItemImage src={token.imageLarge} alt=""></GridItemImage>
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <NFTMainInfo>
            <H1> {token.name} </H1>
            <Text> Maker: {market.floorAsk.maker} </Text>
            <Text> Collection: {token.collection?.name} </Text>
            <Text> Description: {token.description} </Text>
          </NFTMainInfo>
      </RightContainer>
    </ModalBody>
  );
};

export const ModalBody = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 95%;
`;

export const LeftContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow-y: scroll;
`;

export const RightContainer = styled.div`
  border-radius: 5px;
  overflow-y: scroll;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 95%;
  padding: 15px;
`;

export const GridItemImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const NFTMainInfo = styled.div`
  font: 18px HVerdana, sans-serif;
  color: rgba(0,0,0,0.8);
  padding: 15px;
`;

export const H1 = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  padding: 5px 15px;
  margin:0px;
`;

export const ThumbnailImg = styled.img`
  height: 25px;
  width: 25px;
  padding: 15px 0px 0px 15px;
`;

export const Text = styled.p`
  margin: 0px;
  padding: 5px 15px;
`;
