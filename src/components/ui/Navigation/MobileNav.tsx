import React from "react";
import Link from "next/link";
import Button from "../Button";
import { cn } from "@/utils/cn";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  className,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn("fixed inset-0 bg-white z-50 flex flex-col p-6", className)}
    >
      <div className="flex justify-end">
        <button onClick={onClose} className="p-2 text-primary">
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <nav className="flex flex-col items-center mt-16 gap-8">
        <Link
          href="/about-us"
          className="text-xl font-medium text-[#132B39] py-2"
          onClick={onClose}
        >
          About us
        </Link>
        <Link
          href="/portfolio"
          className="text-xl font-medium text-[#132B39] py-2"
          onClick={onClose}
        >
          Our Portfolio
        </Link>
        <Link
          href="/leadership"
          className="text-xl font-medium text-[#132B39] py-2"
          onClick={onClose}
        >
          Leadership
        </Link>

        <Button
          variant="default"
          size="lg"
          className="bg-[#132B39] text-[#EEF7FC] rounded-[30px] py-3 px-7 font-semibold text-base mt-4 w-full"
          onClick={onClose}
        >
          Contact us
        </Button>
      </nav>
    </div>
  );
};

export default MobileNav;
