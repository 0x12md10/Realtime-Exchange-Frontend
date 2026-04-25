import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {

    const {searchParams} = new URL(request.url);
    const symbol = searchParams.get("symbol")?.replace("-","");
 
    
    try {
        const trades = await axios(`${process.env.NEXT_PUBLIC_BASE_URI}/ticker/tradingDay` ,{
        params : {
            symbol : symbol,
            timeZone : "+05:30"
            
            
        }
    })
    
    return NextResponse.json(trades.data)
        
    } catch (error) {
        console.error("Error fetching depth")
        console.error(error)
    }
    
}


