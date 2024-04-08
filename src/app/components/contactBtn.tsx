import Link from "next/link";

export default function ContactBtn() {
  return (
    <Link href="/contact" className="bg-ekc-b1 px-24 py-8 rounded-md text-white font-semibold hover:bg-ekc-b4 duration-300">
      Contact
    </Link>
  );
}
