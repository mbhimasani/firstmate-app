/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import styled from 'styled-components';
export interface TokenData {
    name: string;
    tokenId: string;
    contract: string;
    description: string;
    imageSmall: string;
    supply: string;
    kind: string;
    owner: string;
}

export const Card: FC<{
    token: TokenData;
    onClick?: () => void;
  }> = ({ token, onClick }) => {   
    
    return (
        <GridItemContainer onClick={onClick}>
            <CardContent>
                <ImageContainer>
                    <GridItemImage src={token.imageSmall} alt=''></GridItemImage>
                </ImageContainer>
                <TextContainer>
                    <NFTName>{token.name}</NFTName>
                    {token.tokenId} <br/>
                    {token.supply}
                </TextContainer>
            </CardContent>
        </GridItemContainer>
    )
}

export const GridItemContainer = styled.div`
    border: 1px solid rgba(0,0,0,.1);
    margin-bottom: 10px;
    width: 100%;
    height: 350px;
`;

export const CardContent = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-family: Helvetica, Verdana, sans-serif;
`;

export const ImageContainer = styled.div`
    overflow: hidden; 
    position: relative; 
    height: 70%; 
    width: 80%;
    margin: 5px 5%;
    padding: 5px 5%;
`;

export const GridItemImage = styled.img`
    object-fit: cover;
    width:100%; 
    height:100%;
`;

export const TextContainer = styled.div`
    position: relative; 
    width: 80%;
    margin: 5px 5%;
    padding: 5px 5%;
`;

export const NFTName = styled.p`
    font: bold 14px Helvetica, Verdana, sans-serif;
    margin: 0px;
`;