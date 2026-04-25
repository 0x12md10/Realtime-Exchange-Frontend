import axios from "axios";
import { Depth, KLine, Ticker, Trade } from "./types";

const BASE_URL = "/api";

export async function getTicker(market: string) {
    const ticker = await axios.get(`${BASE_URL}/ticker` , {
        params : {
            symbol : market
        }
    });
    
    if (!ticker) {
        throw new Error(`No ticker found for ${market}`);
    }
  
    return ticker.data;
}

export async function getTickers(): Promise<Ticker[]> {
    const response = await axios.get(`${BASE_URL}/tickers`);
    return response.data;
}


export async function getDepth(market: string): Promise<Depth> {
    const response = await axios.get(`${BASE_URL}/depth?symbol=${market}`);
    return response.data;
}
export async function getTrades(market: string): Promise<Trade[]> {
    const response = await axios.get(`${BASE_URL}/trades?symbol=${market}`);
    return response.data;
}

export async function getKlines(market: string, interval: string, startTime: number, endTime: number): Promise<KLine[]> {
    const response = await axios.get(`${BASE_URL}/trade?symbol=${market}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`);
    const data: KLine[] = response.data.kLines;
    
    return data.sort((x, y) => (Number(x[6]) < Number(y[6]) ? -1 : 1));
}
