import { FC } from 'react';
import styled from 'styled-components';

export const ProjectHeader: FC = () => {
    return (
        <>
          <HeaderWrapper>
            <ProjectTitleText>
              NFT Marketplace: Buy, Sell, Browse
            </ProjectTitleText>
          </HeaderWrapper>
          
        </>
    )
}

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 25px;
`;

export const ProjectTitleText = styled.div`
  font: small-caps bold 32px Helvetica, Verdana, sans-serif;
  color: #262626;
  text-align: center;
  padding: 25px;
`;