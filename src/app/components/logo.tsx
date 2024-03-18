import Image from "next/image";

function Logo() {
  return <Image className="object-contain" src="/logo.png" alt="logo" width={150} height={150} />;
}

export default Logo;
