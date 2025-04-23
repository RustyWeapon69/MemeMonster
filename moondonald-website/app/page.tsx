"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-200 p-6 flex flex-col items-center justify-center text-center">
      <Image
        src="/moondonald-logo.png"
        alt="$MOONALD Logo"
        width={180}
        height={180}
        className="rounded-full shadow-xl mb-6"
      />
      <h1 className="text-5xl font-extrabold text-yellow-900 mb-4">$MOONALD</h1>
      <p className="text-xl text-yellow-800 max-w-xl mb-6">
        The first memecoin endorsed by pure patriotism, powered by memes, and prepped for a moon mission. Launch with the spirit of 2024. 🚀
      </p>

      <Card className="w-full max-w-xl bg-white/90 shadow-lg border-2 border-yellow-300">
        <CardContent className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">Tokenomics</h2>
            <ul className="text-left list-disc list-inside text-yellow-700">
              <li>💧 40% Liquidity</li>
              <li>📢 15% Marketing</li>
              <li>🧠 15% Dev Wallet</li>
              <li>🔥 20% Burn</li>
              <li>🎁 10% Airdrops</li>
              <li>Total Supply: 420,000,000,000 $MOONALD</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">How to Buy</h2>
            <p className="text-yellow-800">
              Use <strong>Phantom Wallet</strong> and connect to Solana. Find us soon on Raydium and Jupiter.
            </p>
            <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
              Buy on Jupiter
            </Button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">Follow the Movement</h2>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
              <a href="https://twitter.com/MemeKing69er" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" /> Follow @MemeKing69er
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
