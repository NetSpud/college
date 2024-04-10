import { ReactNode } from "react";

function SubHeading({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h2 id={id} className="text-2xl text-center font-semibold text-white">
      {children}
    </h2>
  );
}

function SubSubHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-xl text-center font-semibold text-white">{children}</h3>;
}

function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl text-center font-semibold text-white">{children}</h1>;
}

export { SubHeading, SubSubHeading, Heading };
