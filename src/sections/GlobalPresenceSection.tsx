"use client";

import React from "react";
import Container from "@/components/ui/container";
import Image from "@/components/ui/image";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
interface LocationItem {
  country: string;
  description: string;
}

const locations: LocationItem[] = [
  {
    country: "United Arab Emirates (UAE)",
    description: "Headquarter",
  },
  {
    country: "Bahrain",
    description: "Launch partnerships underway",
  },
];

const GlobalPresenceSection: React.FC = () => {
  return (
    <Container className="py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-[508px]">
          <Heading className="text-[36px] font-normal mb-6 md:mb-16 tracking-[-1.92px]">
            Proudly <span className="text-primary">Serving the Gulf</span>
          </Heading>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="space-y-3 border-b border-gray-200 pb-6"
              >
                <Heading className="text-xl md:text-2xl">
                  {location.country}
                </Heading>
                <Text className="text-gray-500 text-[16px]">
                  {location.description}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/assets/images/map.png"
          alt="World Map"
          className="w-full md:w-[632px]"
        />
      </div>
    </Container>
  );
};

export default GlobalPresenceSection;
