import { notFound } from "next/navigation";
import Lesson1 from "../single-pages/l1";
import Lesson2 from "../single-pages/l2";
import Lesson3 from "../single-pages/l3";
import Lesson4 from "../single-pages/l4";
import Lesson5 from "../single-pages/l5";
import Lesson6 from "../single-pages/l6";
import Lesson7 from "../single-pages/l7";
import Lesson8 from "../single-pages/l8";

export default function Page({ params }: { params: { slug: number } }) {
  if (params.slug >= 1 && params.slug <= 8) {
    switch (String(params.slug)) {
      case "1":
        return (
          <div>
            <Lesson1 />
          </div>
        );
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
