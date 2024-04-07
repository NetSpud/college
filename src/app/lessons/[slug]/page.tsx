import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

function Heading({ children }: { children: string }) {
  return <h1 className="text-3xl text-center font-semibold text-white">{children}</h1>;
}

function TableOfContents() {}

function Lesson1() {
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 w-72">
        <div className="flex flex-col gap-3 px-4">
          <span className="text-sm text-gray-500">Chapter</span>
          <span className="text-sm">Lesson 1</span>
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
        <div className="lg:w-1/2 mx-auto">
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
  return <h1>Lesson 2</h1>;
}

function Lesson3() {
  return <h1>Lesson 3</h1>;
}

function Lesson4() {
  return <h1>Lesson 4</h1>;
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
