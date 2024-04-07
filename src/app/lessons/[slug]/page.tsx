"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: number } }) {
  if (params.slug >= 1 && params.slug <= 8) {
    switch (String(params.slug)) {
      case "1":
        return <Lesson1 />;
      case "2":
        return <Lesson2 />;
      case "3":
        return <Lesson3 />;
      case "4":
        return <Lesson4 />;
      case "5":
        return <Lesson5 />;
      case "6":
        return <Lesson6 />;
      case "7":
        return <Lesson7 />;
      case "8":
        return <Lesson8 />;
    }
  } else {
    return notFound();
  }
}

function SubHeading({ children, id }: { children: string; id: string }) {
  return (
    <h2 id={id} className="text-2xl text-center font-semibold text-white">
      {children}
    </h2>
  );
}

function SubSubHeading({ children }: { children: string }) {
  return <h3 className="text-xl text-center font-semibold text-white">{children}</h3>;
}

function Heading({ children }: { children: string }) {
  return <h1 className="text-3xl text-center font-semibold text-white">{children}</h1>;
}

function Lesson1() {
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 1 - History Of Javascript</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#what-is-js" className="text-sm">
            What is Javascript?
          </Link>
          <Link href="#what-makes-unique" className="text-sm">
            What makes Javascript unique?
          </Link>
          <Link href="#what-can-do" className="text-sm">
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
            JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
          </p>
          <div className="flex justify-center">
            <img src="/lesson-media/example-js.png" />
          </div>
          <small className="text-xs text-center text-gray-100">Example of javascript code</small>
          <br />
          <br />
          <br />
          <SubHeading id="what-makes-unique">What makes Javascript unique?</SubHeading>
          <p className="text-white mx-auto">JavaScript is a multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
          <div className="flex justify-center">
            <img src="/lesson-media/example-oop.png" />
          </div>
          <small className="text-xs text-center text-gray-100">Example of javascript Object-Orientated</small>

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
function Lesson2() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 2 - Hello, world!</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#script-tags" className="text-sm">
            Script Tags
          </Link>
          <Link href="#runing-code" className="text-sm">
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
function Lesson3() {
  const [answer, setAnswer] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, [answer]);

  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 2 - Variables</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#what-are" className="text-sm">
            What are variables?
          </Link>
          <Link href="#diff" className="text-sm">
            Difference between var, let and const
          </Link>
          <Link href="#var-naming" className="text-sm">
            Naming Variables
          </Link>
          <Link href="#writing-code" className="text-sm">
            Writing code
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>Lesson 2 - Variables</Heading>
          <p className="mb-8">In this lesson, we will be learning about variables and how they are used in Javascript.</p>
          <SubHeading id="what-are">What are variables?</SubHeading>
          <p className="mb-12">
            Variables are piece of named data that can be reused. This prevents you having to write the same piece of code, every time. For example, imagine you were writing a book, with the character name called &quot;Jack&quot;. Jack&apos;s name
            appears 1000s of times in your book. At the end, you decide to change their name from Jack, to Jill. If you weren&apos;t using variables, you&apos;d have to change their name over 1000 times, in all the different places. If you were using
            a variable instead, you could just replace their name in one place, and everything else would update.
          </p>

          <SubSubHeading>Without Variables</SubSubHeading>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">
              {
                "const data = `Jack, a software engineer, was working on a project.\nJack's task was to debug a piece of code. Jack found the bug, fixed it,\nand then Jack tested it. Jack was satisfied with the results.\nJack then documented his work. Jack's manager was impressed with Jack's efficiency.\nJack felt proud of his work.`;"
              }
            </code>
          </pre>
          <SubSubHeading>With Variables</SubSubHeading>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">
              {`const characterName = "Jack";\nconst data = \`\${characterName}, a software engineer, was working on a project.\n\${characterName}'s task was to debug a piece of code. Jack found the bug, fixed it,\nand then \${characterName} tested it. \${characterName} was satisfied with the results.\n\${characterName} then documented his work. \${characterName}'s manager was impressed with \${characterName}'s efficiency.\n\${characterName} felt proud of his work.\`;`}
            </code>
          </pre>
          <p className="mb-12">Notice how we only need to change the code in one place, to update it everywhere else in the code..</p>

          <SubHeading id="diff">Difference between var, let and const</SubHeading>

          <p>There are three main ways of declaring (writing) a variable.</p>
          <p>To declare a changing value variable, you can use the keyword &quot;let&quot;</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`let myVariable = "Hello"; //allows the value to be maniuplated in the future`}</code>
          </pre>
          <p>To declare a constant (aka unchanging) value variable, you can use the keyword &quot;const&quot;</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const myVariable = "Hello"; //cannot be changed in the future`}</code>
          </pre>
          <p>To declare a changing value variable, you can also use the keyword &quot;var&quot;, but this is an old style, and is not recommended anymore.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`var myVariable = "Hello"; //Same as let, but the old style of writing, not used much anymore.`}</code>
          </pre>

          <SubHeading id="running-code">Naming Variables</SubHeading>

          <p>Can we name a variable anything?</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`let 1stVariable = "Hello"; //This will throw an error`}</code>
          </pre>
          <p>To declare a changing value variable, you can use the keyword &quot;let&quot;</p>
          <p className="mb-12">
            Javascript has some limitations as to what can be used to name variables - you cannot use numbers at the start of your variable, and it <strong>cannot</strong> contain digits, or special characters, except for the underscore and $, which
            are allowed.
          </p>

          <SubSubHeading>Writing code</SubSubHeading>

          <p>Create two variables named &apos;first&apos; and &apos;last&apos;, and assign them your name. Try and print these to the console, and see the result. If you get stuck, click the &apos;answer&apos; button.</p>
          <button onClick={() => setAnswer(!answer)} className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300 mb-6">
            See Answers
          </button>
          {answer && (
            <div className="my-3">
              <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
                <code className="language-js">{`const first = "John";\nconst last = "Smith";\n\nconsole.log(first); // Outputs "John" \nconsole.log(last); // Outputs "Smith"`}</code>
              </pre>
            </div>
          )}
          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/2" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 2
            </Link>
            <Link href="/lessons/4" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lesson4() {
  useEffect(() => {
    Prism.highlightAll();
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

function Lesson5() {
  return <h1>Lesson 5</h1>;
}

function Lesson6() {
  return <h1>Lesson 6</h1>;
}

function Lesson7() {
  return <h1>Lesson 7</h1>;
}

function Lesson8() {
  return <h1>Lesson 8</h1>;
}
