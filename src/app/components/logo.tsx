import Image from "next/image";

function Logo() {
  return (
    <a href="/">
      <Image className="object-contain" src="/logo.png" alt="logo" width={150} height={150} />
    </a>
  );
}

export default Logo;
