"use client";

const LazyCarousel = React.lazy(
  () => import("@/components/UI/Carousel/Carousel")
);

import Header from "@/components/Header/Header";
import BouncingDotsLoading from "@/components/UI/Loading/BouncingDotsLoading";

import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<BouncingDotsLoading />}>
        <LazyCarousel showIndicators autoScrollInterval={3}>
          <img
            key="1"
            src="/img/neom-yT7En_eUUnI-unsplash.jpg"
            className="w-full h-auto object-cover min-h-60"
            loading="lazy"
          />
          <img
            key="2"
            src="/img/neom-z4ELCkNmnz0-unsplash.jpg"
            className="w-full h-auto object-cover min-h-60"
            loading="lazy"
          />
          <img
            key="3"
            src="/img/pete-alexopoulos-XyVQW6VcEs8-unsplash.jpg"
            className="w-full h-auto object-cover min-h-60"
            loading="lazy"
          />
        </LazyCarousel>
      </React.Suspense>
    </>
  );
}
