"use client";
import Link from "next/link";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import { Heading, SubHeading } from "../../components/headings";

function Lesson8() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 777";
  }, [showAnswer]);
  const title = "Lesson 8 - Functions";
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4 sticky-custom">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#why" className="text-sm hover:text-ekc-b4 duration-100">
            Why use functions?
          </Link>
          <Link href="#how" className="text-sm hover:text-ekc-b4 duration-100">
            How to make one
          </Link>
          <Link href="#parameters" className="text-sm hover:text-ekc-b4 duration-100">
            Parameters
          </Link>
          <Link href="#calling" className="text-sm hover:text-ekc-b4 duration-100">
            Calling a function
          </Link>
          <Link href="#exercise" className="text-sm hover:text-ekc-b4 duration-100">
            Exercise
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

          <SubHeading id="parameters">Parameters</SubHeading>

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

export default Lesson8;
