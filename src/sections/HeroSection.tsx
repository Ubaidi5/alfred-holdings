import Image from "@/components/ui/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import Button from "@/components/ui/Button";
import Navigation from "@/components/ui/Navigation";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#4AACE3] overflow-hidden">
      <div className="pt-4 pb-4">
        <div className="fixed top-4 z-100 left-1/2 transform -translate-x-1/2">
          <Navigation />
        </div>
      </div>
      <Container className="pt-8 md:pt-16 lg:pt-20 pb-0 flex flex-col items-center">
        <div className="text-center mx-auto mb-5 md:mb-6">
          <Heading className="text-white font-normal text-[32px] leading-[1.2] md:text-[48px] lg:text-[64px] md:leading-[1.2] w-full">
            Empowering GCC&apos;s Future – One Strategic Investment at a Time
          </Heading>
        </div>

        <Text className="text-center text-white text-[14px] md:text-[16px] lg:text-[18px] max-w-[90%] md:max-w-[650px] mx-auto mb-6 md:mb-8">
          Alfred Holdings is a visionary investment group based in Dubai, UAE,
          driving strategic growth across the GCC through innovation and trust.
        </Text>

        <div className="flex justify-center mb-8 md:mb-10">
          <Button className="rounded-full bg-white text-[#4AACE3] hover:bg-white/90 font-medium text-[16px] px-8 py-3">
            Explore Our Vision
          </Button>
        </div>
      </Container>
      <div className="w-full mt-0">
        <div className="relative w-full max-w-[1200px] mx-auto">
          <Image
            src="/assets/images/home-image.png"
            alt="Alfred Holdings Mascot with Dubai Skyline"
            className="w-full h-auto object-contain"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
