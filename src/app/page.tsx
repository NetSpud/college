import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import Image from "next/image";
import Hero1 from "../../public/hero-1.jpg";

function ArrowLeft() {
  return (
    <svg
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

function ArrowRight() {
  return (
    <svg
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
  return (
    <div className="flex justify-center relative">
      <Image src={Hero1} alt="hero" className="object-cover brightness-50 w-screen h-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen">
        <div className="flex justify-between mx-auto text-white" style={{ width: "95%" }}>
          <ArrowLeft />
          <p className="lg:text-3xl text-lg text-white font-light">GETTING STARTED WITH JAVASCRIPT</p>
          <ArrowRight />
        </div>
      </div>
      <span className="absolute bottom-2 flex gap-x-3">
        <div className="p-3 bg-green-600 rounded-full"></div>
        <div className="p-3 bg-green-500 rounded-full"></div>
        <div className="p-3 bg-green-500 rounded-full"></div>
      </span>
    </div>
  );
}
