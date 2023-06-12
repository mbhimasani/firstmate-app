export interface NFTData {
    token: TokenData;
    market: TokenMarketData;
}

export interface TokenMarketData {
    floorAsk: {
        price: PriceObject;
        source: Source;
    };
    topBid: {
        price: PriceObject;
    };
}

export interface TokenData {
    contract: string;
    tokenId: string;
    name: string;    
    description: string;
    imageSmall: string;
    imageLarge: string;
    kind: string;
    supply: string;
    rarity: string;
    collection: Collection;
    owner: string;
}

export interface Collection {
    id: string;
    name: string;
};

export interface PriceObject {
    currency: {
        symbol: string;
    };  
    amount: {
        usd: number;
        native: number;
    };
};

export interface Source {
    name: string;
    url: string;
};