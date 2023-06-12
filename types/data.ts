export interface TokenData {
    name: string;
    tokenId: string;
    contract: string;
    description: string;
    imageSmall: string;
    supply: string;
    kind: string;
    owner: string;
    price: {
        currencySymbol: string;
        amount: {
            usd: number;
            native: number;
        };
    };
}