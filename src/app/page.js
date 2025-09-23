import AboutSection from "@/components/AboutUs";
import KeyFeatures from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PartnerDiagram from "@/components/Partner";
import ServicesPage from "@/components/Services";
import HowItWorks from "@/components/Steps";
import DownloadApp from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonial";
import ContactUs from "@/components/ContactUs";
import WhatsAppButton from "@/components/WhatsappButton";
import ExtraIncome from "@/components/ExtraIncome";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import WhyChooseFetchTrue from "@/components/WhyChooseUs";
import ServiceProviderSection from "@/components/ServiceProvider";

export default function Home() {
  return (
    <div>
      <Navbar/>
        <HeroSection />
        <AboutSection />
        
         {/* <DownloadApp /> */}
        <WhyChooseFetchTrue />
        <ServicesPage />
        <HowItWorks />
        <Testimonials />
        <ServiceProviderSection />

        {/* <PartnerDiagram /> */}
        {/* <KeyFeatures /> */}
        <ExtraIncome />
        <BlogSection />
        <FAQSection/>
        {/* <ContactUs /> */}
        <WhatsAppButton />
    </div>
  );
}
