"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BalloonAnimation from "../components/balloons";
import Button from "../components/button";
import GratitudeSection from "../components/sections/gratitude";
import Hero from "../components/sections/hero";
import MemorySection from "../components/sections/memory";
import VirtuesSection from "../components/sections/virtues";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn !== "true") {
      router.push("/");
    }
  }, [router]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-900 text-pink-100">
      <BalloonAnimation>
        <div className="flex flex-col gap-20 h-full min-h-screen w-full items-center">
          <Hero />
          <MemorySection className="animate-fadeInLeft" />
          <VirtuesSection />
          <GratitudeSection />
          <Button
            href="/gift-one"
            title="Ver primer regalo"
            text="Ver primer regalo"
          />
          <small className="text-center">✨ 15/12/2017 - ♾️ ✨</small>
        </div>
      </BalloonAnimation>
    </main>
  );
}
