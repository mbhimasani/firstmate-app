/* eslint-disable @next/next/no-img-element */
import { NFTData } from "@/types/data";
import { paths } from "@reservoir0x/reservoir-sdk";
import { FC } from "react";
import styled from "styled-components";
import { LabelMediumSize } from "./gridItem";

export const ModalItem: FC<{
  nft: NFTData;
}> = ({ nft }) => {
  const token = nft.token;
  const market = nft.market;

  // TODO: price should be displayed in a large div with:
  //  button to place bid if available, latest bid price with currency symbol, nft owner
  //  button to buy nft if available, floor ask price with currency symbol, nft owner
  const showPrice = () => {
    let price: number | undefined = 0;
    let currency: string | undefined = "";
    let label: string = "";
    let buttonlabel: string = "";

    if (market.topBid?.price) {
      price = market.topBid.price.amount.native;
      currency = market.topBid.price.currency.symbol;
      label = "Current Bid: ";
      buttonlabel = 'Place Bid';
    } else if (market.floorAsk.price) {
      price = market.floorAsk.price.amount.native;
      currency = market.floorAsk.price.currency.symbol;
      label = "Buy Now: ";
      buttonlabel = "Buy Now"
    } else {
      label = "-";
      buttonlabel = "Make Offer";
    };

    return (
      <ModalPriceContainer>
        <LabelMediumSize className="modal-label">{label}</LabelMediumSize>
        <ModalItemPrice>{price + " " + currency}</ModalItemPrice>
        <BuyBidButton>{buttonlabel}</BuyBidButton>
      </ModalPriceContainer>
    );
  };

  return (
    <ModalBody>
      <LeftContainer>
        <ModalImageContainer>
          <ModalItemImage src={token.imageLarge} alt=""></ModalItemImage>
        </ModalImageContainer>
      </LeftContainer>
      <RightContainer>
        <ModalInfoContainer>
          <ModalHeading> {token.name} </ModalHeading>
          {showPrice()}
          <ModalText> Maker: {market.floorAsk.maker} </ModalText>
          <ModalText> Collection: {token.collection?.name} </ModalText>
          <ModalText> Description: {token.description} </ModalText>
          {/* TODO: display price. display button if available to buy. or display last sold price */}
        </ModalInfoContainer>
      </RightContainer>
    </ModalBody>
  );
};

export const ModalBody = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 95%;

  @media screen and (max-width: 575px) {
    display: block;
    overflow-y: scroll;
  }
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

export const ModalImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 95%;
  padding: 15px;
`;

export const ModalItemImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ModalInfoContainer = styled.div`  
  padding: 15px;
  font-family: Helvetica, Verdana, sans-serif;
  color: rgba(0,0,0,0.75);
`;

export const ModalHeading = styled.p`  
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px 15px;
  margin: 0px 0px 15px 5px;
  color: rgba(0,0,0,0.8);
  width: fit-content;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: 10px;
  box-shadow: 0px 2px rgba(0,0,0,.1);
`;

export const ThumbnailImg = styled.img`
  height: 25px;
  width: 25px;
  padding: 15px 0px 0px 15px;
`;

export const ModalText = styled.p`
  margin: 0px;
  padding: 5px 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 10px;
  word-wrap: break-word;
`;

export const ModalItemPrice = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0,0,0,.8);
`;

export const ModalPriceContainer = styled.div`
  padding: 10px 10px 20px 10px;
  display: inline-flex;
  align-items: center;
  width: 100%;
`;

export const BuyBidButton = styled.button`
  margin-left: auto;
  margin-right: 10px;
  background-color: black;
  padding: 10px;
  width: 55%;
  color: white;
  font-size: 20px;
  border-radius: 25px;
  pointer-events: none;
  cursor: not-allowed;
  opacity: .35;
`;
