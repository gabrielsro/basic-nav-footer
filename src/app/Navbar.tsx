import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <Link href={"/"}>
          <Image src={logo} alt="Company logo" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
}
