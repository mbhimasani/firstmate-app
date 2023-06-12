import React, { FC } from "react";
import { Card } from "./gridItem";
import { NFTData } from "@/types/data";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ModalItem } from "./modalItem";

export const Modal: FC<{
  nft: NFTData | undefined;
  onClose: () => void;
}> = ({ nft, onClose }) => {
  const modalContent = (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader>
            <ModalClose href="#" onClick={onClose}>
              &#x2715;
            </ModalClose>
          </ModalHeader>
          {nft && <ModalItem nft={nft}></ModalItem>}
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  width: 70vw;
  height: 70vh;

  @media screen and (max-width: 575px) {
    width: 90vw;
  }
`;

export const ModalContainer = styled.div`
  background: white;
  height: calc(70vh - 30px);
  border-radius: 15px;
  padding: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const ModalClose = styled.a`
  color: black;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;
