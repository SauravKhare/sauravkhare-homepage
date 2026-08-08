"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Blog" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export function MobileSideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open menu" className="lg:hidden text-light-primary">
          <MenuIcon fontSize="small" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-dark-primary text-light-primary border-r border-light-primary/10 w-70 sm:w-[320px]"
      >
        <SheetHeader>
          <SheetTitle className="font-fraunces text-xl font-bold uppercase text-light-primary">
            {/* Saurav Khare */}
          </SheetTitle>
        </SheetHeader>

        <ul className="flex flex-col font-jakarta uppercase gap-6 font-semibold mt-8 px-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className="hover:text-teal-primary transition-all duration-100 ease-out"
                >
                  {link.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}