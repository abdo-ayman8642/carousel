"use client";
const LazyCarousel = React.lazy(
  () => import("@/components/UI/Carousel/Carousel")
);
import BouncingDotsLoading from "@/components/UI/Loading/BouncingDotsLoading";

import React from "react";

export default function Home() {
  return (
    <div className="p-2">
      <React.Suspense fallback={<BouncingDotsLoading />}>
        <h1 className="text-2xl font-bold mb-4">Your Next.js App</h1>
        <LazyCarousel>
          <img
            key="1"
            src="/img/neom-yT7En_eUUnI-unsplash.jpg"
            className="w-full h-auto"
            loading="lazy"
          />
          <img
            key="2"
            src="/img/neom-z4ELCkNmnz0-unsplash.jpg"
            className="w-full h-auto"
            loading="lazy"
          />
          <img
            key="3"
            src="/img/pete-alexopoulos-XyVQW6VcEs8-unsplash.jpg"
            className="w-full h-auto"
            loading="lazy"
          />
        </LazyCarousel>
      </React.Suspense>
    </div>
  );
}
