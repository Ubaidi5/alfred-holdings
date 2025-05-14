"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Container from "@/components/ui/container";
import Image from "@/components/ui/image";
/**
 * Icons
 */
import FacebookIcon from "@public/assets/icons/facebook-circle-filled.svg";
import InstagramIcon from "@public/assets/icons/instagram.svg";
import XIcon from "@public/assets/icons/x.svg";
import LinkedInIcon from "@public/assets/icons/linkedin-square-filled.svg";
import YoutubeIcon from "@public/assets/icons/youtube-square-filled.svg";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-[#132B39] text-white py-20", className)}>
      <Container>
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Column 1 - Logo and description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-[101px] h-[34px] p-0.5 bg-white rounded flex items-center justify-center">
                <Image
                  src="/asstes/images/alfred-holdings.png"
                  alt="Alfred Holdings"
                  width={101}
                  height={34}
                />
              </div>
              <span className="text-xl md:text-2xl text-white">
                | GCC Growth Leader
              </span>
            </div>
            <p className="text-[#DFE3E7] text-sm max-w-[600px]">
              Alfred Holdings is a Dubai-based investment group behind
              InsuranceMarket.ae and more. We build trust-driven ventures across
              the GCC.
            </p>
          </div>

          {/* Column 2 - Links and social */}
          <div className="flex flex-col-reverse md:flex-col gap-12 md:gap-6">
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row [&>a]:w-[123px]">
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
                  <FacebookIcon className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <XIcon className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <YoutubeIcon className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-[#B6DEF4] border-opacity-60"></div>

        {/* Copyright and legal links */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
          <div className="text-[#DFE3E7] text-sm">
            © 2025 Alfred Investments LLC. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row gap-4">
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
