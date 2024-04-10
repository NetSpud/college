"use client";
import Link from "next/link";
import { Heading, SubHeading } from "../[slug]/page";
import { useEffect } from "react";
import Prism from "prismjs";

function Lesson4() {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 4";
  }, []);
  const title = "Lesson 4 - Data Types";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#strings" className="text-sm">
            String
          </Link>
          <Link href="#numbers-floats" className="text-sm">
            Numbers/Floats
          </Link>
          <Link href="#boolean" className="text-sm">
            Boolean
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>{title}</Heading>

          <SubHeading id="strings">String</SubHeading>

          <p className="mb-12">
            Strings are a collection of characters. They can be as short as a single character, or as long as you would like. Strings are used to store text-based information, and can be maniuplated in different ways. Strings can be stored using
            double quotes (&quot;), single quotes (&apos;), or backticks (`).
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const example1 = "hello"; //all do the same thing\nconst example2 = 'hello'; //all do the same thing\nconst example3 = \`hello\`; //all do the same thing`}</code>
          </pre>

          <SubHeading id="numbers-floats">Numbers/Floats</SubHeading>

          <p>
            Numbers and floats are, used for storing, well, numbers. If you need to perform mathmatical calculations, you&apost;d use a number. For example, calculating the total amount in a shopping basket, or counting down from 10. The only
            difference between a number and a float, is a float is a floating point number (number with decimal space)
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const number = 25; //number\nconst float = 19.5; //float`}</code>
          </pre>

          <SubHeading id="boolean">Booleans</SubHeading>
          <p>
            Booleans are true/false values. Any time you need to use the value of &quot;yes&quot;, or &quot;no&quot;, you&apos;d use a boolean. Boolean values are generally not used on their own, but are the result derived from other actions with
            your code, such as a function permitting you to login to a website if your password is correct, or if your card has been declined or not during checkout.
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const yesval = true; //says yes\nconst noval = false; //says no`}</code>
          </pre>

          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/3" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 3
            </Link>
            <Link href="/lessons/5" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson4;
