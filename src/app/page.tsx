import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import FeatureBoxes from "@/components/landing/FeatureBoxes";
import OrbitSection from "@/components/landing/OrbitSection";
import CompaniesSection from "@/components/landing/CompaniesSection";
import FreeTrailSection from "@/components/landing/FreeTrailSection";
import GetInTouchSection from "@/components/landing/GetInTouchSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Hero />
      <DashboardPreview />
      <FeatureBoxes />
      <OrbitSection />
      <CompaniesSection />
      <FreeTrailSection />
      <GetInTouchSection />
      <Footer />

    </main>
  );
}