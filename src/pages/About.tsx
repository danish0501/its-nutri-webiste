import AboutHero from "@/components/About/AboutHero";
import Values from "@/components/About/Values";
import Timeline from "@/components/About/Timeline";
import CTA from "@/components/CTA";
import OurStory from "@/components/About/OurStory";
import IngredientSpotlight from "@/components/About/IngredientSpotlight";

const About = () => (
  <div className="min-h-screen pt-24">
    <AboutHero />
    <OurStory />
    <Values />
    <IngredientSpotlight />
    <Timeline />
    <CTA />
  </div>
);

export default About;

