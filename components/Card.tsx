import { FC } from 'react';
import styled from 'styled-components';
export interface TokenData {
    name: string;
    tokenid: string;
    description: string;
    image: string;
    supply: string;
}

export const Card: FC<{
    token: TokenData;
  }> = ({ token }) => {   
    
    return (
        <CardWrapper>
            <CardContent>
                {token.name}
                {token.tokenid} 
                {token.description} 
                {token.image} 
                {token.supply}
            </CardContent>
        </CardWrapper>
    )
}

export const CardWrapper = styled.div`
    border: 1px solid rgba(0,0,0,.1);
    flex: 33%;
    margin-bottom: 10px;
`;

export const CardContent = styled.div`
    overflow: hidden;
    width: 200px;
    height: 200px;
`;