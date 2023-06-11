/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import styled from 'styled-components';
export interface TokenData {
    name: string;
    tokenid: string;
    contract: string;
    description: string;
    imageSmall: string;
    supply: string;
    kind: string;
    owner: string;
}

export const Card: FC<{
    token: TokenData;
  }> = ({ token }) => {   
    
    return (
        <GridItemContainer>
            <CardContent>
                <ImageContainer>
                    <GridItemImage src={token.imageSmall} alt=''></GridItemImage>
                </ImageContainer>
                {token.name}
                {token.tokenid} 
                {token.supply}
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
`;

export const ImageContainer = styled.div`
    overflow: hidden; 
    position: relative; 
    height: 70%; 
    width: 80%;
    margin: 10px 10%;
`;

export const GridItemImage = styled.img`
    object-fit: cover;
    width:100%; 
    height:100%;
`;