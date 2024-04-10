"use client";
import Link from "next/link";
import { Heading, SubHeading, SubSubHeading } from "../../components/headings";
import { useEffect, useState } from "react";
import Prism from "prismjs";

function Lesson3() {
  const [answer, setAnswer] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Canterbury College | Lesson 3";
  }, [answer]);

  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72 hidden lg:block">
        <div className="flex flex-col gap-3 px-4 sticky-custom">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 3 - Variables</span>
          <span className="text-sm text-gray-500">Lesson Navigation</span>
          <Link href="#what-are" className="text-sm hover:text-ekc-b4 duration-100">
            What are variables?
          </Link>
          <Link href="#diff" className="text-sm hover:text-ekc-b4 duration-100">
            Difference between var, let and const
          </Link>
          <Link href="#var-naming" className="text-sm hover:text-ekc-b4 duration-100">
            Naming Variables
          </Link>
          <Link href="#writing-code" className="text-sm hover:text-ekc-b4 duration-100">
            Exercise
          </Link>
        </div>
      </div>
      <div className="bg-ekc-b2 w-full p-6">
        <div className="lg:w-3/4 mx-auto text-white">
          <Heading>Lesson 3 - Variables</Heading>
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
                "const data = `Jack, a software engineer, was working on a project.\nJack's task was to debug a piece of code. Jack found the bug, fixed it,\nand then Jack tested it. Jack was satisfied with the results.\nJack then documented his work.Jack's manager was impressed with Jack's efficiency.\nJack felt proud of his work.`;"
              }
            </code>
          </pre>
          <SubSubHeading>With Variables</SubSubHeading>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">
              {`const characterName = "Jack";\nconst data = \`\${characterName}, a software engineer, was working on a project.\n\${characterName}'s task was to debug a piece of code. Jack found the bug, fixed it,\nand then \${characterName} tested it.\n\${characterName} was satisfied with the results.\n\${characterName} then documented his work.\n\${characterName}'s manager was impressed with \${characterName}'s efficiency.\n\${characterName} felt proud of his work.\`;`}
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

          <SubHeading id="var-naming">Naming Variables</SubHeading>

          <p>Can we name a variable anything?</p>
          <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
            <code className="language-js">{`let 1stVariable = "Hello"; //This will throw an error`}</code>
          </pre>
          <p>To declare a changing value variable, you can use the keyword &quot;let&quot;</p>
          <p className="mb-12">
            Javascript has some limitations as to what can be used to name variables - you cannot use numbers at the start of your variable, and it <strong>cannot</strong> contain digits, or special characters, except for the underscore and $, which
            are allowed.
          </p>

          <SubHeading id="writing-code">Exercise</SubHeading>

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

export default Lesson3;
