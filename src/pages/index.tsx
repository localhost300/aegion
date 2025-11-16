import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FoundationGrowth from "@/components/FoundationGrowth";
import RetirementIRA from "@/components/RetirementIRA";
import AboutCompany from "@/components/AboutCompany";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aegion Mountain | Modern Strategy Partners</title>
        <meta
          name="description"
          content="Aegion Mountain delivers tailored guidance, digital tools, and thoughtful strategy to help organizations move forward with confidence."
        />
        <link rel="icon" href="/favi.png" type="image/png" />
      </Head>

      <div className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
          <Hero />
          <ValueProps />
          <FoundationGrowth />
          <RetirementIRA />
          <AboutCompany />
          <Approach />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
