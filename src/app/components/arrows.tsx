import { MouseEventHandler } from "react";

function ArrowLeft({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <svg
      onClick={onClick}
      className="w-8 h-8 cursor-pointer hover:text-ekc-b3 duration-300"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}

function ArrowRight({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <svg
      onClick={onClick}
      className="w-8 h-8 cursor-pointer hover:text-ekc-b3 duration-300"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export { ArrowLeft, ArrowRight };
