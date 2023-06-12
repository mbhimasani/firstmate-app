import React, { FC } from "react";
import { Card } from "./gridItem";
import { TokenData } from "@/types/data";

export const Modal: FC<{
    token: TokenData | undefined;
    onClose: () => void;
  }> = ({ token, onClose }) => {

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#" onClick={onClose}>
                            x
                        </a>
                    </div>
                    {token && <Card token={token}></Card>}
                </div>
            </div>
        </div>
    );

    return modalContent;
};