import React, { useState } from 'react';
import { Card, TokenData } from '@/components/gridItem'
import { FirstMateHead, ProjectHeader } from '@/components/header';
import { Modal } from '@/components/modal';
import { NFT_SAMPLE_LIST } from '@/constants';
import { ROUTES } from '@/constants/routes';
import useSWR from 'swr';
import { fetcher } from '@/./utils/fetcher'
import styled from 'styled-components';

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [curIndex, setCurrentIndex] = useState(0);

  // JSON.stringify works in this case is because there are no spaces in the object strings. this would break if there are spaces in either the contractID or tokenID. But I opted to use this since it works easily with the  NFT sample list given.
  const { data, error } = useSWR(`${ROUTES.API.TOKENS.INDEX}?nfts=${JSON.stringify(NFT_SAMPLE_LIST)}`, fetcher); 
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  // started with manually creating interfaces expected to have a better idea of the reservoir api response and not commit to the SDK right away. Can abstract this using the Reservoir SDK.
  const collections = data?.collection as {token: TokenData}[];

  return (
    <>
      <FirstMateHead></FirstMateHead>
      <MainWrapper>
        {showModal &&
          <Modal onClose={() => setShowModal(false)} token={collections?.at(curIndex)?.token}/>
        }
        <ProjectHeader></ProjectHeader>
        <MainContent>
          <FilterContainerRow>
          </FilterContainerRow>
          <GridContainer>      
            {collections?.map((collection, index) => ( 
              <Card 
                token={collection.token} 
                onClick={() => {
                  setShowModal(true);
                  setCurrentIndex(index);
                  }
                } 
                key={`grid-card-nft-${index}`}></Card>
            ))}
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