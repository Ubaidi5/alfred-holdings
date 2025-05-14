import Navigation from "@/components/ui/Navigation";
import CTASection from "@/sections/CTASection";
import LeadershipSection from "@/sections/LeadershipSection";
import GlobalPresenceSection from "@/sections/GlobalPresenceSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary">
        <Navigation />
      </div>

      <LeadershipSection />
      <GlobalPresenceSection />
      <CTASection />
    </div>
  );
}
