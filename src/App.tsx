import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
const SectionDivider = () => (
  <div className="relative ">
    <div className="absolute top-0 left-0 right-0 h-px w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 h-full w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <SectionDivider />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
