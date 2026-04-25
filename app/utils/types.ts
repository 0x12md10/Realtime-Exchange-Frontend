export type KLine = [
  number, // 0: open time
  string, // 1: open price
  string, // 2: high price
  string, // 3: low price
  string, // 4: close price
  string, // 5: volume
  number, // 6: close time
  string, // 7: quote asset volume
  number, // 8: number of trades
  string, // 9: taker buy base asset volume
  string, // 10: taker buy quote asset volume
  string  // 11: ignore
];

export interface Trade {
    "id": number,
    "isBuyerMaker": boolean,
    "price": string,
    "quantity": string,
    "quoteQuantity": string,
    "timestamp": number
}

export interface Depth {
    bids: [string, string][],
    asks: [string, string][],
    lastUpdateId: string
}


export interface Ticker {
  symbol: string;

  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;

  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;

  volume: string;
  quoteVolume: string;

  openTime: number;
  closeTime: number;

  firstId: number;
  lastId: number;
  count: number;
}

