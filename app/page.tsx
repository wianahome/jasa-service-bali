import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";



export default function Home () {
  return (
    <>
    <Hero />
    <AboutUs />
    <Services />
    <ServiceArea />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />
    </>
  )
}