"use client";
import Link from "next/link";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import { Heading, SubHeading } from "../../components/headings";

function Lesson7() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 7";
  }, [showAnswer]);

  const title = "Lesson 7 - Loops";

  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#for" className="text-sm hover:text-ekc-b4 duration-100">
            For Loop
          </Link>
          <Link href="#while" className="text-sm hover:text-ekc-b4 duration-100">
            While Loop
          </Link>
          <Link href="#dowhile" className="text-sm hover:text-ekc-b4 duration-100">
            Do While
          </Link>
          <Link href="#exercise" className="text-sm hover:text-ekc-b4 duration-100">
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

export default Lesson7;
