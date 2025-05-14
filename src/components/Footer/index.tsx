"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Container from "@/components/ui/container";
import Image from "@/components/ui/image";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-[#132B39] text-white py-20", className)}>
      <Container>
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Column 1 - Logo and description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-32 bg-white rounded flex items-center justify-center">
                <Image
                  src="/asstes/images/alfred-holdings.png"
                  alt="Alfred Holdings"
                  width={101}
                  height={34}
                />
              </div>
              <span className="text-2xl text-white">| GCC Growth Leader</span>
            </div>
            <p className="text-[#DFE3E7] text-sm max-w-[600px]">
              Alfred Holdings is a Dubai-based investment group behind
              InsuranceMarket.ae and more. We build trust-driven ventures across
              the GCC.
            </p>
          </div>

          {/* Column 2 - Links and social */}
          <div className="space-y-8">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2">
              <Link
                href="/about-us"
                className="text-[#EEF7FC] font-semibold text-sm py-2"
              >
                About Us
              </Link>
              <Link
                href="/companies"
                className="text-[#EEF7FC] font-semibold text-sm py-2"
              >
                Companies
              </Link>
              <Link
                href="/careers"
                className="text-[#EEF7FC] font-semibold text-sm py-2"
              >
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="text-[#EEF7FC] font-semibold text-sm py-2"
              >
                Contact Us
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <div className="w-6 h-6 flex items-center justify-center">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <div className="w-6 h-6 flex items-center justify-center">
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <div className="w-6 h-6 flex items-center justify-center">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <div className="w-6 h-6 flex items-center justify-center">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <div className="w-6 h-6 flex items-center justify-center">
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
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-[#B6DEF4] border-opacity-60"></div>

        {/* Copyright and legal links */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="text-[#DFE3E7] text-sm">
            © 2025 Alfred Investments LLC. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-[#DFE3E7] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-[#DFE3E7] text-sm">
              Terms of Use
            </Link>
            <Link href="/cookies-settings" className="text-[#DFE3E7] text-sm">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
