import React, { useState } from "react";
import { Card } from "@/components/gridItem";
import { FirstMateHead, ProjectHeader } from "@/components/header";
import { Modal } from "@/components/modal";
import { NFT_SAMPLE_LIST } from "@/constants";
import { ROUTES } from "@/constants/routes";
import useSWR from "swr";
import { fetcher } from "@/./utils/fetcher";
import styled from "styled-components";
import { NFTData } from "@/types/data";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [curIndex, setCurrentIndex] = useState(0);

  // JSON.stringify works in this case is because there are no spaces in the object strings. this would break if there are spaces in either the contractID or tokenID. But I opted to use this since it works easily with the  NFT sample list given.
  const { data, error } = useSWR(
    `${ROUTES.API.TOKENS.INDEX}?nfts=${JSON.stringify(NFT_SAMPLE_LIST)}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // the data returned from the request matches the Reservoir API typed response for paths['/tokens/v6']['get']['responses']['200']['schema']['tokens'], so I could have used their provided typings, but for sake of clarity on types expected, I opted to create my own interface. The limitation on this is that the local typing may become out of date if the Reservoir API updates their types.
  const collections = data?.collection as NFTData[];

  return (
    <>
      <FirstMateHead></FirstMateHead>
      <MainWrapper>
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            nft={collections?.at(curIndex)}
          />
        )}
        <ProjectHeader></ProjectHeader>
        <MainContent>
          <FilterSearchSortContainerRow>
            {/* TODO: 
            <FilterOptions>
              side panel (options: selling, source, currrency)
            </FilterOptions>
            <Search>
              search box (tokenid, collection, contractid, name)
            </Search>
            <SortOptions>
              dropdown (options: floorAsk price, tokenid, rarity)
            </SortOptions>
            */}
          </FilterSearchSortContainerRow>
          <GridContainer>
            {collections?.map((collection, index) => (
              <Card
                nft={collection}
                onClick={() => {
                  setShowModal(true);
                  setCurrentIndex(index);
                }}
                key={`grid-card-nft-${index}`}
              ></Card>
            ))}
          </GridContainer>
        </MainContent>
      </MainWrapper>
    </>
  );
}

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  min-height: 100vh;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GridContainer = styled.div`
  padding: 55px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px 30px;
  justify-items: center;
`;

export const FilterSearchSortContainerRow = styled.div``;
