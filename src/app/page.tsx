"use client";
import Image from "next/image";
import Hero1 from "../../public/hero-1.jpg";
import Hero2 from "../../public/hero-2.jpg";
import Hero3 from "../../public/hero-3.jpg";
import { useEffect, useState } from "react";
import Link from "next/link";
import ContactBtn from "./components/contactBtn";
import { ArrowLeft, ArrowRight } from "./components/arrows";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Lessons />
      <Usage />
      <h2 className="text-3xl text-bold bg-ekc-b4 text-white font-bold text-center p-3">WANT TO LEARN MORE?</h2>
      <div className="my-12 flex justify-center">
        <ContactBtn />
      </div>
    </>
  );
}

function HeroSlider() {
  const images = [Hero1, Hero2, Hero3];
  const delay = 3000;
  const [currentImage, setCurrentImage] = useState(Hero1);

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
            <h1 className="lg:text-3xl text-sm sm:text-lg text-white font-light">GETTING STARTED WITH JAVASCRIPT</h1>
            <div className="flex gap-16 pt-3 justify-center">
              <Link href="/lessons" className="px-3 py-2 rounded-md bg-ekc-b3 hover:bg-ekc-b4 duration-300 cursor-pointer uppercase font-semibold text-lg">
                Start
              </Link>
              <Link href="/lessons" className="px-3 py-2 rounded-md bg-ekc-b3 hover:bg-ekc-b4 duration-300 cursor-pointer uppercase font-semibold text-lg">
                Lessons
              </Link>
            </div>
          </div>
          <ArrowRight onClick={() => nextImage()} />
        </div>
      </div>
      <div className="absolute bottom-2 flex gap-x-3">
        {images.map((image, index) => (
          <div aria-label={`Image slide ${index}`} tabIndex={0} role="button" key={index} onClick={() => setCurrentImage(image)} className={`p-3 bg-green-300 rounded-full cursor-pointer ${image === currentImage ? "bg-green-500" : ""}`}></div>
        ))}
      </div>
    </div>
  );
}

function Card({ title = "123", desc }: { title?: string; desc?: string }) {
  return (
    <div style={{ background: "#232323" }} className="flex rounded-sm text-white flex-col p-1">
      <span className=" text-md text-center font-bold">{title}</span>
      <p className="py-12 text-center text-sm">{desc}</p>
    </div>
  );
}

function Lessons() {
  return (
    <div>
      <h2 className="text-3xl text-bold bg-ekc-b4 text-white font-bold text-center p-3">LESSONS</h2>
      <div className="bg-ekc-b2 text-center py-3">
        <h3 className="text-xl text-white font-semibold">8 BESPOKE LESSONS</h3>
        <div className="p-4 grid gap-3 grid-cols-2 grid-rows-2 lg:grid-cols-4 mx-auto lg:grid-flow-col grid-flow-row">
          <Card title="History Of Javascript" desc="How long has it been around?" />
          <Card title="Hello, world!" desc="How long has it been around?" />
          <Card title="Variables" desc="What are variables? Why are they helpful?" />
          <Card title="Data Types" desc="What's the difference between the number 1, and a string “1”?" />
          <Card title="Mathmatical Operations" desc="Addition, subtraction, multiplication, division and modulo " />
          <Card title="Conditional Operators" desc="IF, ELSE, NOT" />
          <Card title="Loops" desc="What happens when you need to run a piece of code 10,000 times?" />
          <Card title="Functions" desc="How do you re-use code?" />
        </div>
        <Link href="/lessons" className="px-3 py-2 rounded-lg text-white text-3xl font-semibold bg-ekc-b1 hover:bg-ekc-b4 duration-300">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

function Usage() {
  return (
    <div>
      <h2 className="text-3xl text-bold bg-ekc-b4 text-white font-bold text-center p-3">WHAT IS JAVASCRIPT USED FOR?</h2>

      <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-5 p-12">
        <div className="bg-black text-white p-3">
          <span className="text-lg font-medium uppercase">Tools</span>
          <p className="font-thin text-base">JavaScript is used to power tools and libraries like ReactJS, Webpack, Bootstrap </p>
        </div>
        <div className="bg-black text-white p-3">
          <span className="text-lg font-medium uppercase">Functionality</span>
          <p className="font-thin text-base">JavaScript can be used to create dynamically updating content, such as setting background colours, fonts and more!</p>
        </div>
        <div className="bg-black text-white p-3">
          <span className="text-lg font-medium uppercase">Interfacing</span>
          <p className="font-thin text-base">Used to communicate with servers/APIs.</p>
        </div>
        <div className="bg-black text-white p-3">
          <span className="text-lg font-medium uppercase">Validation</span>
          <p className="font-thin text-base">Can be used to validate information entered, such as inputs from a form.</p>
        </div>
      </div>
    </div>
  );
}
