"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import { cn } from "@/utils/cn";
import MobileNav from "./MobileNav";
import Image from "@/components/ui/image";

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
            "w-full max-w-[180px] md:max-w-full md:w-full md:max-w-[706px] mx-auto md:m-0 md:mx-auto flex items-center justify-between py-2 px-4 md:p-2 md:pr-4 md:pl-5 md:pr-2 rounded-full border border-[#4AACE3] bg-white",
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

        <button
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
