import React, { useMemo } from 'react';
import { Card, TokenData } from '@/components/gridItem'
import { ProjectHeader } from '@/components/header';
import { NFT_SAMPLE_LIST } from '@/constants';
import { ROUTES } from '@/constants/routes';
import useSWR from 'swr';
import { fetcher } from '@/./utils/fetcher'
import styled from 'styled-components';

export default function Home() {

  // JSON.stringify works in this case is because there are no spaces in the object strings. this would break if there are spaces in either the contractID or tokenID. But I opted to use this since it works easily with the  NFT sample list given.
  
  const { data, error } = useSWR(`${ROUTES.API.TOKENS.INDEX}?nfts=${JSON.stringify(NFT_SAMPLE_LIST)}`, fetcher); 
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  const collections = data?.collection as {token: TokenData}[];

  return (
    <>
      <MainWrapper>
        <ProjectHeader></ProjectHeader>
        <MainContent>
          <FilterContainerRow>
          </FilterContainerRow>
          <GridContainer>      
            {collections?.map((collection, index) => ( <Card token={collection.token} key={index}></Card>))}
          </GridContainer>
        </MainContent>
      </MainWrapper>
    </>
  )
}

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const GridContainer = styled.div`
  padding: 55px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
`;

export const FilterContainerRow = styled.div`

`;