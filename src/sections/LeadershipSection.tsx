"use client";

import React from "react";
import Image from "@/components/ui/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";

/**
 * Icons
 */
import GlobeIcon from "@public/assets/icons/globe.svg";
import LinkedInIcon from "@public/assets/icons/linkedin.svg";

const LeadershipSection: React.FC = () => {
  return (
    <section className="bg-[#132B39] relative overflow-hidden">
      <Container className="py-25 md:py-30 relative z-10">
        <Heading className="block md:hidden mb-10">
          Message from the <span className="text-primary">Chairman</span>
        </Heading>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
          <Image
            src="/assets/images/avinash-babur.png"
            alt="Avinash Babur - Founder & Chairman"
            className="w-full max-w-[412px] aspect-square object-cover border border-[#1D83BC]/50 rounded-3xl"
          />

          <div className="w-full md:max-w-[713px] flex flex-col gap-3 md:gap-6">
            <Heading className="hidden md:block">
              Message from the <span className="text-primary">Chairman</span>
            </Heading>

            <Text className="text-white text-lg md:text-2xl font-normal leading-[36px] tracking-[-0.04em]">
              At Alfred Holdings, our philosophy is simple: lead with integrity,
              invest with purpose, and grow with the region. From our roots in
              insurance to our expansion across sectors and markets, our goal
              remains consistent—to create long-term value for the communities
              we serve. As we scale across the GCC, our commitment to trust,
              innovation, and regional impact is stronger than ever.
            </Text>

            {/* Signature */}
            <Text className="text-white font-bold text-base md:text-xl leading-[28px] tracking-[-0.02em] mt-2">
              ⎯ Avinash Babur, Founder & Chairman, Alfred Holdings
            </Text>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <GlobeIcon className="w-6 h-6" />
              <LinkedInIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeadershipSection;
