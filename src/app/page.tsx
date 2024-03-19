"use client";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import Image, { StaticImageData } from "next/image";
import Hero1 from "../../public/hero-1.jpg";
import Hero2 from "../../public/hero-2.jpg";
import Hero3 from "../../public/hero-3.jpg";
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";

function ArrowLeft({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <svg
      onClick={onClick}
      className="w-8 h-8 cursor-pointer hover:text-ekc-b3 duration-300"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}

function ArrowRight({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <svg
      onClick={onClick}
      className="w-8 h-8 cursor-pointer hover:text-ekc-b3 duration-300"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSlider />
      <Footer />
    </div>
  );
}

function HeroSlider() {
  const images = [Hero1, Hero2, Hero3];
  const delay = 3000;
  const [currentImage, setCurrentImage] = useState(Hero1);
  const [heroPosition, setHeroPosition] = useState(0);

  function nextImage(opposite = false) {
    // if opposite is true, go to the previous image
    const currentIndex = images.indexOf(currentImage);
    let nextIndex;
    if (opposite) {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = images.length - 1;
      }
    } else {
      nextIndex = (currentIndex + 1) % images.length;
    }
    return setCurrentImage(images[nextIndex]);
  }

  useEffect(() => {
    // loop through the images in order, then go from start again, delay of 3000
    const interval = setInterval(() => {
      nextImage();
    }, delay);
    return () => clearInterval(interval);
  }),
    [currentImage];

  return (
    <div className="flex justify-center relative">
      <div className="flex-shrink-0 w-full opacity-100 duration-100">
        <Image src={currentImage} alt="hero" className="object-cover brightness-50 w-screen h-screen" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between mx-auto text-white" style={{ width: "90vw" }}>
          <ArrowLeft onClick={() => nextImage(true)} />
          <div>
            <p className="lg:text-3xl text-sm sm:text-lg text-white font-light">GETTING STARTED WITH JAVASCRIPT</p>
            <div className="flex gap-16 pt-3 justify-center">
              <a className="px-3 py-2 rounded-md bg-ekc-b3 hover:bg-ekc-b4 duration-300 cursor-pointer uppercase font-semibold text-lg">Start</a>
              <a className="px-3 py-2 rounded-md bg-ekc-b3 hover:bg-ekc-b4 duration-300 cursor-pointer uppercase font-semibold text-lg">Lessons</a>
            </div>
          </div>
          <ArrowRight onClick={() => nextImage()} />
        </div>
      </div>
      <span className="absolute bottom-2 flex gap-x-3">
        {images.map((image, index) => (
          <div key={index} onClick={() => setCurrentImage(image)} className={`p-3 bg-green-300 rounded-full cursor-pointer ${image === currentImage ? "bg-green-500" : ""}`}></div>
        ))}
      </span>
    </div>
  );
}
