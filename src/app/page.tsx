import HeroSection from "@/sections/HeroSection";
import LeadershipSection from "@/sections/LeadershipSection";
import GlobalPresenceSection from "@/sections/GlobalPresenceSection";
import CTASection from "@/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <LeadershipSection />
      <GlobalPresenceSection />
      <CTASection />
    </div>
  );
}
