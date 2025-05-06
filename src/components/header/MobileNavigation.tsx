"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import NavLinks from "./NavLinks"
import Image from "next/image"
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Image
          src="/img/icons/hamburger.svg"
          width="36"
          height="36"
          alt="Menu"
          className="invert"
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <NavLinks isMobileNav/>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation