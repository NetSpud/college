"use client";

import Link from "next/link";
import { Heading, SubHeading, SubSubHeading } from "../../components/headings";
import { useEffect } from "react";

function Lesson1() {
  useEffect(() => {
    document.title = "Canterbury College | Lesson 1";
  });
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4 sticky-custom">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 1 - History Of Javascript</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#what-is-js" className="text-sm hover:text-ekc-b4 duration-100">
            What is Javascript?
          </Link>
          <Link href="#what-makes-unique" className="text-sm hover:text-ekc-b4 duration-100">
            What makes Javascript unique?
          </Link>
          <Link href="#what-can-do" className="text-sm hover:text-ekc-b4 duration-100">
            What can Javascript do?
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto">
          <Heading>History Of Javascript</Heading>
          <br />
          <br />
          <br />
          <SubHeading id="what-is-js">What is Javascript?</SubHeading>
          <p className="text-white mx-auto">
            JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Javascript has
            been around since 1995, and was created by Brendan Eich, a Netscape Communications Corporation employee.
          </p>
          <div className="flex justify-center">
            <img src="/lesson-media/example-js.png" alt="Example piece of javascript" />
          </div>
          <small className="text-xs text-center text-gray-100 mx-auto block">Example of javascript code</small>
          <br />
          <br />
          <br />
          <SubHeading id="what-makes-unique">What makes Javascript unique?</SubHeading>
          <p className="text-white mx-auto">JavaScript is a multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. It is unique thanks to:</p>
          <ul className="list-disc mx-auto text-white">
            <li>Its ability to manipulate the DOM (Document Object Model)</li>
            <li>Its able to run on the client-side of the web</li>
            <li>It can be used with other languages (Node.js)</li>
          </ul>

          <br />

          <div className="flex justify-center">
            <img src="/lesson-media/example-oop.png" alt="Example of object-orientated Javascript" />
          </div>
          <small className="text-xs text-center text-gray-100 mx-auto block">Example of javascript Object-Orientated</small>

          <br />
          <br />
          <br />
          <SubHeading id="what-can-do">What can Javascript do?</SubHeading>
          <p className="text-white mx-auto">
            Javascript is designed to make webpages &quot;come alive&quot;, by adding functionality to webpages. This can be achieved by adding actions to button clicks, form submissions or other events. You can read the whole list of events{" "}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/Events" className="text-blue-600">
              here
            </Link>
            .
          </p>

          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lessons page
            </Link>
            <Link href="/lessons/2" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson1;
