import Link from "next/link";
import ContactBtn from "../components/contactBtn";

export default function Page() {
  return (
    <div className="pb-12">
      <h1 className="text-3xl text-bold bg-gray-200 text-center p-3">ABOUT</h1>
      <p></p>

      <div className="text-center pt-12">
        <ContactBtn />
      </div>
    </div>
  );
}
