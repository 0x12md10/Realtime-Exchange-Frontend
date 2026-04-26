import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get("symbol")?.replace("-", "");
    const limit = searchParams.get("limit") || 10;

    try {
        const trades = await axios(`${process.env.NEXT_PUBLIC_BASE_URI}/trades`, {
            params: { symbol, limit }
        });

        const mapped = trades.data.map((t: any) => ({
            id: t.id,
            isBuyerMaker: t.isBuyerMaker,
            price: t.price,
            quantity: t.qty,
            quoteQuantity: t.quoteQty,
            timestamp: t.time,
        }));

        return NextResponse.json(mapped);
    } catch (error) {
        console.error("Error fetching trades");
        console.error(error);
        return NextResponse.json([], { status: 500 });
    }
}
