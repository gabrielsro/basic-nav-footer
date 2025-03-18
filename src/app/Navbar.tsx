import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <div className="flex flex-wrap items-center gap-20">
          <Link href={"/"}>
            <Image src={logo} alt="Company logo" width={40} height={40} />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-0">
              <NavigationMenuItem className="px-4">
                <Link href="/research" legacyBehavior passHref>
                  <NavigationMenuLink>Research</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4">
                    <li>
                      <Link href="/aerospace" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Aerospace
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/automotive" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Automotive
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/banking" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Banking
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/healthcare" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Healthcare
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pharma" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Pharma
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4">
                    <li>
                      <Link
                        href="/network-infrastructure"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Network Infrastructure
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/cybersecurity" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Cybersecurity
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/data-backup-and-disaster-recovery"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Data Backup and Disaster Recovery
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/cloud-services" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Cloud Services
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/technical-support" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Technical Support
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/software-management" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Software Management
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/it-consulting-and-strategy"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          IT Consulting and Strategy
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/compliance-and-regulatory-support"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "w-full justify-start whitespace-nowrap",
                          )}
                        >
                          Compliance and Regulatory Support
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink>About us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/careers" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4">
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
