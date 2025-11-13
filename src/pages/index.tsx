import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FoundationGrowth from "@/components/FoundationGrowth";
import RetirementIRA from "@/components/RetirementIRA";
import ValueProps from "@/components/ValueProps";
import Approach from "@/components/Approach";
import Offerings from "@/components/Offerings";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aegion Mountain | Retirement Strategy Partners</title>
        <meta
          name="description"
          content="Aegion Mountain guides organizations through IRA stewardship, 401(k) modernization, strategic insight, and plan assurance."
        />
        <link rel="icon" href="/favi.png" type="image/png" />
      </Head>

      <div className="bg-brand-pearl text-ink">
        <Navbar />
        <main>
          <Hero />
          <FoundationGrowth />
          <RetirementIRA />
          <ValueProps />
          <Approach />
          <Offerings />
          <Testimonials />
          <Insights />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
