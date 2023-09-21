import MySkill from "@/components/home/my-skill";
import HeroSection from "@/components/home/hero-section";

export default async function Home() {

  return (
    <main className="px-12 py-4 max-w-screen-xl mx-auto">
      <HeroSection />
      <MySkill/>
    </main>
  );
}
