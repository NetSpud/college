"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [showAnswer]);
  const title = "Lesson 5 - Mathmatical Operators";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#add" className="text-sm">
            Addition
          </Link>
          <Link href="#sub" className="text-sm">
            Subtraction
          </Link>
          <Link href="#div" className="text-sm">
            Division
          </Link>
          <Link href="#mult" className="text-sm">
            Multiplication
          </Link>
          <Link href="#mod" className="text-sm">
            Modulo
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

          <SubSubHeading>Exercise</SubSubHeading>
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

function Lesson6() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [showAnswer]);
  const title = "Lesson 6 - Conditional Operators";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#if" className="text-sm">
            The &quot;if&quot; statement
          </Link>
          <Link href="#else" className="text-sm">
            Else
          </Link>
          <Link href="#logical" className="text-sm">
            Logical Operators
          </Link>
          <Link href="#exercise" className="text-sm">
            Exercise
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>{title}</Heading>
          <p className="text-center">In this lesson, we&apos;re going to learn how to perform conditional operations in JavaScript.</p>
          <p>There are several conditional operators that are available for us to use:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`if // if statement\nelse // else statement\nelse if // else if statement`}</code>
          </pre>

          <SubHeading id="if">The &quot;if&quot; statement</SubHeading>
          <p>The if statement is a crucial part of logic within a program, as it allows the code to progress down different paths, depending on the state of the program.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`if (condition) {
  // code to run if the condition is true
}`}</code>
          </pre>
          <p>
            As demonstrated above, the code <i>within</i> the curly braces will only run if the condition is true. If the condition is false, the code will be skipped.
          </p>
          <SubHeading id="else">Else</SubHeading>
          <p>The else statement is used as a supplement with the if statement, and allows us to run code if the if statement is false.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`if (condition) {
  // code to run if the condition is true
} else {
  // code to run if the condition is false
}`}</code>
          </pre>

          <SubHeading id="exercise">Comparisons</SubHeading>
          <p>Javascript doesn&quot;t just check for basic true/false, it can also compare data in a more sophistocated form, such as greater than, less than, or not equal to.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`> //greater than
>= //greater than or equal to
< //less than
<= //less than or equal to
== //equal to
!= //not equal to
=== //strictly equal to
!== //strictly not equal to`}</code>
          </pre>
          <p>These comparisons are used to make more advanced decisions. For example:</p>

          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">
              {`let accountBalance = 5000; // the current account balance
let withdrawalAmount = 6000; // the amount the user wants to withdraw

if (withdrawalAmount > accountBalance) {
  console.log("Insufficient balance. Unable to process withdrawal.");
} else {
  accountBalance -= withdrawalAmount;
  console.log("Withdrawal successful. Your new balance is \${accountBalance}.");
}`}
            </code>
          </pre>

          <SubHeading id="logical">Logical operators</SubHeading>
          <p>There are also several logical operators that we can use in combination with our conditional statements to perform more complicated decisions</p>

          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`&& // and\n|| // or\n! // not`}</code>
          </pre>
          <p>
            These enable us to make decisions based on the value of more than one variable. <br /> For example:
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`if(email === "example@example.com" && password === "password") {
  console.log("You are logged in");
}`}</code>
          </pre>
          <p>
            notice how the use of the &quot;&&&quot; operator means that the result of both email <strong>and</strong> password must be correct for the code to run.
          </p>

          <SubHeading id="exercise">Exercise</SubHeading>
          <p className="mb-3">
            A more tricky one this time! Please declare two constant variables, named email and password. These variables should be string values, and should have the values &quot;example@example.com&quot;, and &quot;password&quot;
            <br />
            Next, write an if statement that logs if the value of email equals &quot;example@example.com&quot; and the value of password equals &quot;password&quot;. If you get stuck, click the button to reveal the answer.
          </p>

          <button onClick={() => setShowAnswer(!showAnswer)} className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
            See Answer
          </button>

          {showAnswer && (
            <div>
              <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
                <code className="language-js">{`const email = "example@example.com";
const password = "password";

if(email === "example@example@example.com" && password === "password") {
    console.log("Login successful");
} else {
    console.log("Login failed");
}`}</code>
              </pre>
              <p>If you want more of a challenge, why not try messing around with the variable values? What do you need to do to make the login fail?</p>
            </div>
          )}

          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/5" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 5
            </Link>
            <Link href="/lessons/7" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lesson7() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [showAnswer]);
  const title = "Lesson 6 - Loops";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#if" className="text-sm">
            The &quot;if&quot; statement
          </Link>
          <Link href="#else" className="text-sm">
            Else
          </Link>
          <Link href="#logical" className="text-sm">
            Logical Operators
          </Link>
          <Link href="#exercise" className="text-sm">
            Exercise
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>{title}</Heading>
          <p>
            Loops are of benefit to programmers anytime they need to run a piece of code a set number of times. If you needed to send 100, emails, you don&apos;t want to be running your code 100 times manually. This is where loops come in to help us.
          </p>
          <p>There are several types of loops available to us in Javascript:</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`for // for loop\nwhile // while loop\ndo while // do while loop`}</code>
          </pre>
          <p>There are more loop options available, but we won&apos;t be covering those in this lesson.</p>
          <SubHeading id="for">For</SubHeading>
          <p>
            The for loop is perfect for when you need to run your code a set number of times. <br />A for loop breaks down into three parts
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`for (let i = 0; i < 10; i++) {
    console.log(i);
}
// for
// let i = 0; i < 10; i++
// the logic`}</code>
          </pre>
          <p>The first part, the &quot;for&quot; starts our for loop statement, telling Javascript what it is</p>
          <p>
            The second part is our condition for our for loop, which has a counter variable to track how many times to run, a condition (i &lt; 10) and then an increment (i++) After this, we have the curly brackets, which holds the code that runs for
            every instance of the loop. In the above code, it&apos;d print the numbers 0-9 to the console.
          </p>
          <SubHeading id="while">While</SubHeading>
          <p>The while loop is perfect for when you don&apos;t know how many times you need to run your code.</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">
              {`while (!gameOver) {
  renderNewFrame();
  renderGame();
}
`}
            </code>
          </pre>
          <p>In the above example, the while loop will continue to render frames for a game until the variable gameOver equals true.</p>
          <SubHeading id="dowhile">Do While</SubHeading>
          <p>
            Do while is the same as a while loop, the only difference is that a while loop will check its condition first before running its code, whereas a do while loop will run its piece of code at least once, before checking the condition set.
          </p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">
              {`do {
  console.log("Hello, world");
} while (false);

// This will print "Hello, world" to the console, even though the condition is false.`}
            </code>
          </pre>
          <SubHeading id="exercise">Exercise</SubHeading>
          <p>Write a for loop that prints the numbers 1-10 to the console. If you get stuck, click the button to reveal the answer.</p>
          <button onClick={() => setShowAnswer(!showAnswer)} className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
            See Answer
          </button>
          {showAnswer && (
            <div>
              <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
                <code className="language-js">
                  {`for (let i = 1; i <= 10; i++) {
  console.log(i);
}`}
                </code>
              </pre>
            </div>
          )}
          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/6" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 6
            </Link>
            <Link href="/lessons/8" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
function Lesson8() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [showAnswer]);
  const title = "Lesson 6 - Functions";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#if" className="text-sm">
            Why use functions?
          </Link>
          <Link href="#else" className="text-sm">
            How to make one
          </Link>
          <Link href="#logical" className="text-sm">
            Parameters
          </Link>
          <Link href="#exercise" className="text-sm">
            Calling a function
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>{title}</Heading>

          <SubHeading id="why">Why do we use functions?</SubHeading>

          <p>
            Functions are pieces of reusable code that prevent the programmer from repeating themselves. Similar to how a variable can replace a value within a string or a condtion, a function is multiple lines of code. Functions also enable cleaner
            code, making it easier to maintain.
          </p>
          <pre>
            <code className="language-js">
              {`function authenticate(username, password) {
    if (username === "admin" && password === "password") {
        return "You have successfully logged in!";
    } else {
        return "Invalid username or password.";
    }
}
`}
            </code>
          </pre>
          <small>An example of a function</small>

          <SubHeading id="how">How to create a function</SubHeading>

          <p>To create a function, you need to use the &quot;function&quot; keyword, followed by the name of the function. The logic for your function is placed within the curly brackets.</p>
          <pre>
            <code className="language-js">
              {`function myFunction() {
    console.log("Hello, world!");
}
`}
            </code>
          </pre>
          <small>Note the braces after the function name () - these are critical!</small>

          <SubHeading id="param">Parameters</SubHeading>

          <p>Functions are not just for reusing static code that doesn&apos;t change. They can also be used in combination with content that changes, or data that is provided by the user. These dynamic pieces of content are called parameters.</p>
          <pre>
            <code className="language-js">
              {`function greetUser(name) {
    console.log("Hello, " + name);
}
greetUser("John");
`}
            </code>
          </pre>
          <small>An example of a function with a parameter</small>
          <p>Notice how the function parameter is written in between the brackets after the function name ();</p>
          <p>When the function is used, we provide the value we want in between the brackets, and it is substitued into the function argument under the variable name &quot;name&quot;.</p>
          <SubHeading id="calling">Calling a Function</SubHeading>

          <p>So how do we call a function? Calling a function is simple. Simply take the function name, and add two brackets after it, similar to how we wrote it at the start. If our function was called myFunction, we&apos;d write:</p>
          <pre>
            <code className="language-js">{`myFunction()`}</code>
          </pre>
          <p>If our function had arguments, we&apos;d write:</p>
          <pre>
            <code className="language-js">{`greetUser("John")`}</code>
          </pre>
          <SubHeading id="exercise">Exercise</SubHeading>
          <p>Write a function called &quot;add&quot; that takes two parameters, and returns the sum of the two numbers. If you get stuck, click the button to reveal the answer.</p>
          <button onClick={() => setShowAnswer(!showAnswer)} className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
            See Answer
          </button>
          {showAnswer && (
            <div>
              <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
                <code className="language-js">
                  {`function add(a, b) {
    return a + b;
}`}
                </code>
              </pre>
            </div>
          )}
          <div className="flex gap-x-3 justify-between pt-3">
            <Link href="/lessons/7" className="px-3 py-2 rounded-md text-white font-semibold bg-ekc-b1 hover:bg-ekc-b3 duration-300">
              Return to lesson 7
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
