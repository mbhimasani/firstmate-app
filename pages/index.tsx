import React from 'react';
import { Card, TokenData } from '../components/Card'
import { NFT_SAMPLE_LIST } from '../constants';
import useSWR from 'swr';
import { fetcher } from '.././utils/fetcher'
import styled from 'styled-components';

export default function Home() {

  // JSON.stringify works in this case is because there are no spaces in the object strings. this would break if there are spaces in either the contractID or tokenID. May be better to use encodeURIComponent
  const { data } = useSWR(`/api/tokens?nfts=${JSON.stringify(NFT_SAMPLE_LIST)}`, fetcher)
  const collections = data?.collection as {token: TokenData}[];

  return (
      <>
          <MainWrapper>
            {collections?.map((collection, index) => ( <Card token={collection.token} key={index}></Card>))}
          </MainWrapper>
      </>
  )
}

export const MainWrapper = styled.div`
    width: 100%;
    margin: 55px;
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    padding: 10px;
`;