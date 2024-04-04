function Page() {
  return (
    <>
      <Hero />
      <div className="grid grid-flow-row lg:grid-rows-2 lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 grid-rows-8 gap-3 mt-3 mx-3">
        <Lesson number={1} name="History Of Javascript" desc="This is the first lesson" />
        <Lesson number={2} name="Hello, world!" desc="This is the first lesson" />
        <Lesson number={3} name="Variables" desc="This is the first lesson" />
        <Lesson number={4} name="Data Types" desc="This is the first lesson" />
        <Lesson number={5} name="Mathmatical Operations" desc="This is the first lesson" />
        <Lesson number={6} name="Conditional Operators" desc="This is the first lesson" />
        <Lesson number={7} name="Loops" desc="This is the first lesson" />
        <Lesson number={8} name="Functions" desc="This is the first lesson" />
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
    <a href={`/lesson-${number}`} className="bg-gray-600 hover:bg-gray-800 duration-300 cursor-pointer text-white rounded-md w-full mx-auto p-3">
      <h1 className="font-semibold">
        {number}. {name}
      </h1>
      <p className="text-sm">{desc}</p>
    </a>
  );
}

export default Page;
