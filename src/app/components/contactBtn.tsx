import Link from "next/link";

export default function ContactBtn({ text = "Contact" }: { text?: string }) {
  return (
    <Link href="/contact" className="bg-ekc-b1 px-24 py-8 rounded-md text-white font-semibold hover:bg-ekc-b4 duration-300">
      {text}
    </Link>
  );
}
