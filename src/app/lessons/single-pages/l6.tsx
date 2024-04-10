"use client";
import Link from "next/link";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import { Heading, SubHeading } from "../../components/headings";

function Lesson6() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 6";
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
          <Link href="#comparisons" className="text-sm">
            Comparisons
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

          <SubHeading id="comparisons">Comparisons</SubHeading>
          <p>Javascript doesn&apos;t just check for basic true/false, it can also compare data in a more sophistocated form, such as greater than, less than, or not equal to.</p>
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
            A more tricky one this time! Please declare two constant variables, named email and password. These variables should be string values, and should have the values &quot;example@example.com&quot;, and &quot;password&quot;.
            <br />
            Next, write an if statement that logs &quot;Login successful&quot; if the value of email equals &quot;example@example.com&quot; and the value of password equals &quot;password&quot;. If it doesn&apos;t, log &quot;Login failed&quot;
            instead. <br /> If you get stuck, click the button to reveal the answer.
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

export default Lesson6;
