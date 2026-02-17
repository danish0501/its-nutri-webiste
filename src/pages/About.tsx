import AboutHero from "@/components/About/AboutHero";
import Values from "@/components/About/Values";
import Timeline from "@/components/About/Timeline";
import CTA from "@/components/CTA";

const About = () => (
  <div className="min-h-screen pt-24">
    <AboutHero />
    <section className="section-padding py-0">
      <div className="container-narrow">
        <Values />
        <Timeline />
      </div>
    </section>
    <CTA
      title="Ready to Start Your Healthy Journey?"
      description="Join thousands of happy customers who have discovered the joy of natural, wholesome snacking."
      className="mt-20"
    />
  </div>
);

export default About;

