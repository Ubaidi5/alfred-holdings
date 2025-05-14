"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import { cn } from "@/utils/cn";
import MobileNav from "./MobileNav";
import Image from "@/components/ui/image";
import MenuIcon from "@public/assets/icons/menu.svg";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative flex justify-between items-center max-w-[1400px] mx-auto">
        <div
          className={cn(
            "w-max md:w-full md:max-w-[706px] mx-0 md:mx-auto flex items-center justify-between py-2 px-4 md:p-2 md:pl-5 md:pr-2 rounded-full border border-[#4AACE3] bg-white",
            className
          )}
        >
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/images/alfred-holdings.png"
                alt="Alfred Holdings"
                width={119}
                height={40}
                className="w-[95px] h-[32px] md:w-[119px] md:h-[40px]"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <nav className="flex items-center">
              <Link
                href="/#"
                className="px-6 py-3 rounded-[32px] text-[#132B39] font-medium hover:bg-gray-100"
              >
                About us
              </Link>
              <Link
                href="/#o"
                className="px-6 py-3 rounded-[32px] text-[#132B39] font-medium hover:bg-gray-100"
              >
                Our Portfolio
              </Link>
              <Link
                href="/#ip"
                className="px-6 py-3 rounded-[32px] text-[#132B39] font-medium hover:bg-gray-100"
              >
                Leadership
              </Link>
            </nav>
          </div>
          <Button
            variant="default"
            size="default"
            className="hidden md:block bg-[#132B39] text-[#EEF7FC] rounded-[30px] py-3 px-7 font-semibold text-base"
          >
            Contact us
          </Button>
        </div>

        <div
          className="md:hidden w-12 h-12 flex items-center justify-center cursor-pointer bg-white rounded-full"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
