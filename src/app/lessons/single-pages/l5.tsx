"use client";
import Link from "next/link";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import { Heading, SubHeading } from "../../components/headings";

function Lesson5() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 5";
  }, [showAnswer]);
  const title = "Lesson 5 - Mathmatical Operators";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#add" className="text-sm hover:text-ekc-b4 duration-100">
            Addition
          </Link>
          <Link href="#sub" className="text-sm hover:text-ekc-b4 duration-100">
            Subtraction
          </Link>
          <Link href="#div" className="text-sm hover:text-ekc-b4 duration-100">
            Division
          </Link>
          <Link href="#mult" className="text-sm hover:text-ekc-b4 duration-100">
            Multiplication
          </Link>
          <Link href="#mod" className="text-sm hover:text-ekc-b4 duration-100">
            Modulo
          </Link>
          <Link href="#exercise" className="text-sm hover:text-ekc-b4 duration-100">
            Exercise
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>{title}</Heading>
          <p className="text-center">In this lesson, we&apos;re going to learn how to perform mathmatical calculations in JavaScript.</p>
          <p>There are several mathmatical operators that are available for us to use:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`+ // addition\n- // subtraction\n/ // division\n* // multiplication\n% // modulo`}</code>
          </pre>
          <SubHeading id="add">Addition</SubHeading>

          <p>Here is an example of the addition operator:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const num1 = 12
const num2 = 5;

const sum = num1 + num2;
console.log(sum); // 17`}</code>
          </pre>
          <SubHeading id="sub">Subtraction</SubHeading>
          <p>Here is an example of using the subtraction operator:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const num1 = 12
const num2 = 5;

const sum = num1 - num2;
console.log(sum); // 7`}</code>
          </pre>
          <SubHeading id="div">Division</SubHeading>
          <p>Here is an example of using the division operator:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const num1 = 100
const num2 = 5;

const sum = num1 / num2;
console.log(sum); // 20`}</code>
          </pre>
          <SubHeading id="mult">Multiplication</SubHeading>
          <p>Here is an example of using the multiplication operator:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const num1 = 100
const num2 = 5;

const sum = num1 * num2;
console.log(sum); // 500`}</code>
          </pre>
          <SubHeading id="mod">Modulo</SubHeading>
          <p>The modulo operator is slightly different, and works by returning the remainder from a calculation.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`const num1 = 10;
const num2 = 3;
const result = a % b;
console.log(c); // 1`}</code>
          </pre>

          <SubHeading id="exercise">Exercise</SubHeading>
          <p>Write a piece of code that calculates the sum of 100 and 50, and logs the result to the console. If you get stuck, click the button to reveal the answer.</p>

          <button onClick={() => setShowAnswer(!showAnswer)} className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
            See Answer
          </button>

          {showAnswer && (
            <div>
              <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
                <code className="language-js">{`const num1 = 100;
const num2 = 50;
const sum = num1 + num2;
console.log(sum); // 150`}</code>
              </pre>
            </div>
          )}

          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/4" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 4
            </Link>
            <Link href="/lessons/6" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson5;
