import Link from "next/link";
import ContactBtn from "../components/contactBtn";
function Page() {
  return (
    <>
      <Hero />

      <div className="text-center my-24">
        <p className="text-lg">
          Welcome to the lessons page! Here you can find all the lessons that are available to you. You can click on a lesson to start it. <br /> Once completed, you can progress onto the next lesson.
        </p>
      </div>
      <div className="container mx-auto grid grid-flow-row lg:grid-rows-2 lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 grid-rows-8 gap-3 mt-12 mb-52">
        <Lesson number={1} name="History Of Javascript" desc="How long has it been around?" />
        <Lesson number={2} name="Hello, world!" desc="How long has it been around?" />
        <Lesson number={3} name="Variables" desc="What are variables? Why are they helpful?" />
        <Lesson number={4} name="Data Types" desc="What's the difference between the number 1, and a string “1”?" />
        <Lesson number={5} name="Mathmatical Operations" desc="Addition, subtraction, multiplication, division and modulo " />
        <Lesson number={6} name="Conditional Operators" desc="IF, ELSE, NOT" />
        <Lesson number={7} name="Loops" desc="What happens when you need to run a piece of code 10,000 times?" />
        <Lesson number={8} name="Functions" desc="How do you re-use code?" />
      </div>
      <div className="text-center py-12">
        <ContactBtn />
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="flex justify-center bg-gray-200 py-3">
      <h1 className="text-4xl font-semibold">LESSONS</h1>
    </div>
  );
}

function Lesson({ number, name, desc }: { number: number; name: string; desc: string }) {
  return (
    <Link href={`/lessons/${number}`} className="bg-gray-600 hover:bg-gray-800 duration-300 cursor-pointer text-white rounded-md w-full mx-auto p-3">
      <h1 className="font-semibold">
        {number}. {name}
      </h1>
      <p className="text-sm">{desc}</p>
    </Link>
  );
}

export default Page;
