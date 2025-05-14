"use client";

import React from "react";
import Image from "@/components/ui/image";
import Container from "@/components/ui/container";
/**
 * Icons
 */
import RocketIcon from "@public/assets/icons/rocket.svg";
import MailIcon from "@public/assets/icons/mail.svg";
import LocationIcon from "@public/assets/icons/location.svg";

const CTASection: React.FC = () => {
  return (
    <section className="bg-[#4AACE3] relative overflow-hidden">
      <Container className="py relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="w-full md:max-w-[568px] flex flex-col gap-8 pb-6 pt-20 md:py-[124px]">
            {/* Heading and text */}
            <div className="flex flex-col gap-4 pb-8 border-b border-[#B6DEF4] border-opacity-50">
              <div className="inline">
                <h2 className="text-4xl md:text-6xl text-white font-normal leading-tight tracking-[-0.06em]">
                  Let&apos;s Build the Future, Together{" "}
                  <RocketIcon className="w-[57px] h-[57px]" />
                </h2>
              </div>
              <p className="text-white text-base md:text-lg font-medium">
                Connect with us to explore endless possibilities.
              </p>
            </div>

            {/* Contact information */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <MailIcon className="w-6 h-6" />
                <a
                  href="mailto:contact@alfred.holdings"
                  className="text-white hover:underline"
                >
                  contact@alfred.holdings
                </a>
              </div>

              <div className="flex items-center gap-3">
                <LocationIcon className="w-6 h-6" />
                <p className="text-white">Dubai, UAE</p>
              </div>
            </div>
          </div>

          <Image
            src="/assets/images/alfred-cta-image.png"
            alt="Business person"
            className="w-auto h-[528px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
