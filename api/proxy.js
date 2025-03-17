import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET(req) {
    const url = new URL(req.url);
    const targetUrl = url.searchParams.get("url");
    
    if (!targetUrl) return NextResponse.json({ error: "No URL provided" }, { status: 400 });

    const response = await fetch(targetUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
    const body = await response.text();
    
    return new NextResponse(body, { headers: { "Content-Type": "text/html" } });
}
