import axios from "axios";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request : NextRequest) {



    const {searchParams} = new URL(request.url);
    const symbol = searchParams.get("symbol")?.replace("-","");
    
    try {
        const kLines = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/uiKlines` , {
            params : {
                symbol : symbol,
                interval : '1h',
                timeZone : '+5:30',
                startTime : (new Date().getTime() - 1000*60*60*24*7),
                endTime : new Date().getTime()
            }
        })
       
        return NextResponse.json({kLines : kLines.data})
        
    } catch (error) {
        console.error("Error fetching kLines");
        console.error(error);
    }
    
}