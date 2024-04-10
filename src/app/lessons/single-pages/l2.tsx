"use client";
import Link from "next/link";
import { Heading, SubHeading, SubSubHeading } from "../../components/headings";
import { useEffect } from "react";
import Prism from "prismjs";

function Lesson2() {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 2";
  }, []);

  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 2 - Hello, world!</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#script-tags" className="text-sm hover:text-ekc-b4 duration-100">
            Script Tags
          </Link>
          <Link href="#running-code" className="text-sm hover:text-ekc-b4 duration-100">
            Running the code
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>Lesson 2 - Hello, world!</Heading>
          <p className="mb-8">In this lesson, we will be writing our first piece of Javascript Code. Because we need a code environment to learn within, we&apos;re going to learn how to make one.</p>
          <SubHeading id="script-tags">&quot;Script&quot; tags</SubHeading>
          <p>A script tag is a way of adding Javascript code to the web browser. By adding this HTML tag into your page, you can execute javascript code.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-html">{`<script></script>`}</code>
          </pre>
          <p>Once that&apos;s done, you can add any javascript code between the tags.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-html">{`<script>console.log("Hello, world!");</script>`}</code>
          </pre>
          <SubHeading id="running-code">Running the code</SubHeading>
          <p>
            Try copying and pasting this code into your HTML document. Why can&apos;t you see anything? This piece of code prints a message to the browser&apos;s console, which is helpful for troubleshooting or displaying messages to the developer
            (you!) To see these messages, you can press:
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-html">{`CTRL + SHIFT + J`}</code>
          </pre>
          or
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-html">{`CMD + SHIFT + J`}</code>
          </pre>
          <div className="py-12">
            <img src="/lesson-media/console.png" />
            <small className="text-xs text-gray-300">Example of console output</small>
          </div>
          <p>Congratulations! You&apos;ve just written your first piece of Javascript!</p>
          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/1" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 1
            </Link>
            <Link href="/lessons/3" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Lesson2;
