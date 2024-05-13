import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Important from "@/components/home/Important";
import Team from "@/components/home/Team";
import Testimonial from "@/components/home/Testimonial";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Important />
      <Team />
      <Testimonial />
      <Contact />
    </>
  );
}
