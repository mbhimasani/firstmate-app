import React, { FC } from "react";
import { Card } from "./gridItem";
import { NFTData } from "@/types/data";

export const Modal: FC<{
    nft: NFTData | undefined;
    onClose: () => void;
  }> = ({ nft, onClose }) => {

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#" onClick={onClose}>
                            x
                        </a>
                    </div>
                    {nft && <Card nft={nft}></Card>}
                </div>
            </div>
        </div>
    );

    return modalContent;
};