export interface NFTData {
  token: TokenData;
  market: TokenMarketData;
}

export interface TokenMarketData {
  floorAsk: {
    price: PriceObject | undefined;
    source: Source | undefined;
    maker: string;
  };
  topBid: {
    price: PriceObject | undefined;
    source: Source | undefined;
  };
}

export interface TokenData {
  contract: string;
  tokenId: string;
  name: string | undefined;
  description: string | undefined;
  imageSmall: string | undefined;
  imageLarge: string | undefined;
  kind: string | undefined;
  supply: string | undefined;
  rarity: string | undefined;
  collection: Collection;
  owner: string | undefined;
}

export interface Collection {
  id: string | undefined;
  name: string | undefined;
}

export interface PriceObject {
  currency: {
    symbol: string;
  };
  amount: {
    usd: number;
    native: number;
  };
}

export interface Source {
  name: string;
  icon: string;
  url: string;
}
