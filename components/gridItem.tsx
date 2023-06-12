/* eslint-disable @next/next/no-img-element */
import { TokenData } from '@/types/data';
import { paths } from '@reservoir0x/reservoir-sdk';
import { FC } from 'react';
import styled from 'styled-components';

export const Card: FC<{
    token: TokenData;
    onClick?: () => void;
  }> = ({ token, onClick }) => {   
    
    return (
        <GridItemContainer onClick={onClick}>
            <CardContent>
                <CardContentTop>
                    <ImageContainer>
                        <GridItemImage src={token.imageSmall} alt=''></GridItemImage>
                    </ImageContainer>
                </CardContentTop>
                <CardContentBottom>
                    <TextContainer>
                        <NFTName>{token.name}</NFTName>
                        <NFTDescription>{token.description}</NFTDescription>
                    </TextContainer>
                </CardContentBottom>
            </CardContent>
        </GridItemContainer>
    )
}

export const GridItemContainer = styled.div`
    margin-bottom: 10px;
    width: 100%;
    height: 50vh;
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
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 10px 10px 0px 0px;
`;

export const CardContentBottom = styled.div`
    position: relative; 
    height: 25%;
    background-color: rgba(0,0,0,1);
`;


export const ImageContainer = styled.div`
    overflow: hidden; 
    border-radius: 5px;
    position: relative; 
    height: 100%;
`;

export const GridItemImage = styled.img`
    object-fit: cover;
    width:100%; 
    height:100%;
`;

export const TextContainer = styled.div`
    position: relative; 
    padding: 5px 5%;
    color: rgba(255,255,255,1)
`;

export const NFTName = styled.p`
    font: bold 14px Helvetica, Verdana, sans-serif;
    margin: 0px;
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
    color: rgba(255,255,255,0.8)
`;
