import { notFound } from "next/navigation";
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

function Lesson1() {
  return <h1>Lesson 1</h1>;
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
