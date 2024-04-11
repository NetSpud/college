import Link from "next/link";
import ContactBtn from "../components/contactBtn";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Canterbury College | About";
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-bold bg-ekc-b4 text-white font-bold text-center p-3 uppercase">About</h1>
      <h2 className="text-2xl block text-center font-extrabold uppercase">Who is this for?</h2>
      <p className="text-center text-lg p-3">This course is intended for Canterbury college students who want to learn the fundementals of JavaScript.</p>
      <h2 className="text-2xl block text-center font-extrabold uppercase">What will you learn?</h2>
      <p className="text-center text-lg p-3">You will learn the basics of JavaScript, including variables, loops, functions, and more.</p>
      <h2 className="text-2xl block text-center font-extrabold uppercase">How will you learn?</h2>
      <p className="text-center text-lg p-3">You will learn through a series of lessons, quizzes, and projects.</p>
      <h2 className="text-2xl block text-center font-extrabold uppercase">What do you need?</h2>
      <p className="text-center text-lg p-3">You will need a computer with internet access and a text editor like Visual Studio Code.</p>
      <h2 className="text-2xl block text-center font-extrabold uppercase">How long will it take?</h2>
      <p className="text-center text-lg p-3">This course will take approximately 2 hours to complete.</p>
      <h2 className="text-2xl block text-center font-extrabold">Stuck?</h2>
      <p className="text-center text-lg p-3">Have any issue or a question we haven&apos;t answered?</p>
      <div className="mb-12 flex justify-center">
        <ContactBtn text="Get in touch" />
      </div>
    </div>
  );
}
