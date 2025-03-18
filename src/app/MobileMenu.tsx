"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { twConfig } from "@/lib/utils";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > parseInt(twConfig.theme.screens.lg))
        setIsOpen(false);
    };
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        className="inline-flex p-0 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon size="20" />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="max-w-lg">
          <SheetHeader className="py-10">
            <SheetTitle>
              <Link
                href="/"
                className="flex items-center justify-center gap-3 text-3xl font-semibold"
              >
                <Image src={logo} alt="Company logo" width={40} height={40} />
                XYZ Corp
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex h-full flex-col items-center">
            <ul className="grid grow place-content-center space-y-7 py-10 text-center text-2xl">
              <li>
                <Link href="/research" className="font-bold hover:underline">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/Industries" className="font-bold hover:underline">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-bold hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-bold hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="font-bold hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
