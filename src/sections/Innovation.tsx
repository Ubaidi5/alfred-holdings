import React from "react";
import Image from "@/components/ui/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";

/**
 * Icons - Import only the icons we need
 */
import Volunteer from "@public/assets/icons/volunteer.svg";
import Square from "@public/assets/icons/square.svg";
import Dots from "@public/assets/icons/dots.svg";

const Innovation: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
          {/* Left side - Image (Hidden on mobile, shown on tablet and up) */}
          <div className="hidden md:block md:w-[45%] lg:w-[40%]">
            <div className="relative">
              <Image
                src="/assets/images/innovation.png"
                alt="Alfred mascot"
                width={450}
                height={570}
                className="w-full max-w-[450px] h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-[55%] lg:w-[60%] md:max-w-[650px]">
            {/* Built on Legacy section */}
            <div className="mb-10 md:mb-14">
              <Heading className="text-[32px] md:text-[48px] leading-tight mb-4 md:mb-5 text-[#132B39]">
                Built on Legacy,{" "}
                <span className="text-[#1D83BC]">Driven by Innovation</span>
              </Heading>
              <Text className="text-[16px] leading-relaxed text-[#475F6B]">
                Born from the success of InsuranceMarket.ae, Alfred Holdings
                expands a legacy of trust into new industries. Our beloved
                mascot, Alfred, once simplified insurance—now he symbolises our
                broader purpose: creating long-term regional value through
                ethical, innovative investment.
              </Text>
            </div>

            {/* Strategic Investments section */}
            <div>
              <Heading className="text-xl md:text-2xl leading-tight mb-4 md:mb-5 text-[#132B39]">
                Strategic Investments with Purpose
              </Heading>
              <Text className="text-[16px] leading-relaxed mb-8 text-[#475F6B]">
                Our focus goes beyond returns. Every investment is a step toward
                shaping the Gulf&apos;s diversified, innovation-first future.
              </Text>

              {/* Investment points with icons */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Point 1 */}
                <div className="flex md:flex-col items-start gap-4">
                  <Volunteer className="w-6 h-6 text-[#132B39]" />
                  <div>
                    <Text className="font-medium text-[16px] text-[#132B39]">
                      Supporting Gulf economic diversification
                    </Text>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex md:flex-col items-start gap-4">
                  <Square className="w-6 h-6 text-[#132B39]" />
                  <div>
                    <Text className="font-medium text-[16px] text-[#132B39]">
                      Investing in sustainable, scalable ventures
                    </Text>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex md:flex-col items-start gap-4">
                  <Dots className="w-6 h-6 text-[#132B39]" />
                  <div>
                    <Text className="font-medium text-[16px] text-[#132B39]">
                      Partnering with trusted regional players
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile image (shown only on mobile) */}
            <div className="md:hidden mt-10">
              <Image
                src="/assets/images/innovation.png"
                alt="Alfred mascot"
                width={300}
                height={380}
                className="w-full max-w-[300px] h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Innovation;
