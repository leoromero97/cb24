"use client";

import Hero from "./components/sections/hero";
import BalloonAnimation from "./components/ballons";
import MemorySection from "./components/sections/memory";
import VirtuesSection from "./components/sections/virtues";
import GratitudeSection from "./components/sections/gratitude";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100">
      <BalloonAnimation>
        <div className="flex flex-col gap-20 h-full min-h-screen w-full items-center">
          <Hero />
          <MemorySection />
          <VirtuesSection />
          <GratitudeSection />
          <Button
            href="/gift-one"
            title="Ver segundo regalo"
            text="Ver primer regalo"
          />
          <small className="text-center">✨ 15/12/2017 - ♾️ ✨</small>
        </div>
      </BalloonAnimation>
    </main>
  );
}
