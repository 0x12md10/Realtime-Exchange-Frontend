import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {

    const {searchParams} = new URL(request.url);
    const symbol = searchParams.get("symbol")?.replace("-","");
    const limit = searchParams.get("limit") || 50;

    
    try {
        const marketDepth = await axios(`${process.env.NEXT_PUBLIC_BASE_URI}/depth` ,{
        params : {
            symbol : symbol,
            limit : limit
        }
    })
    
    return NextResponse.json(marketDepth.data)
        
    } catch (error) {
        console.error("Error fetching depth")
        console.error(error)
    }
    
}


