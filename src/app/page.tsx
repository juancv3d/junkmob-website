import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <About />
      <ContactForm />
    </>
  );
}
