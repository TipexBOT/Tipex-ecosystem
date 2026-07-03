import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      token: "FLASH",
      liquidity: "243 SOL",
      score: 98
    },
    {
      token: "NOVA",
      liquidity: "91 SOL",
      score: 92
    }
  ]);
}
