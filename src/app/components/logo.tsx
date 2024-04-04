import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <Image className="object-contain" src="/logo.png" alt="logo" width={150} height={150} />
    </Link>
  );
}

export default Logo;
