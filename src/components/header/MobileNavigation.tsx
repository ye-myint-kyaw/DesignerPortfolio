"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import NavLinks from "@/components/header/NavLinks"
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