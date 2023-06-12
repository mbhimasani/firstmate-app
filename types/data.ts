export interface NFTData {
  token: TokenData;
  market: TokenMarketData;
}

export interface TokenMarketData {
  floorAsk: {
    price: PriceObject | undefined;
    source: Source | undefined;
  };
  topBid: {
    price: PriceObject | undefined;
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
  collection: Collection | undefined;
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
  name: string | undefined;
  icon: string | undefined;
  url: string | undefined;
}
