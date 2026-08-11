import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import StatsBar from './components/sections/StatsBar.jsx';
import ComingSoon from './components/sections/ComingSoon.jsx';
import NotifyForm from './components/sections/NotifyForm.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import SearchDemo from './components/sections/SearchDemo.jsx';
import ForBusinesses from './components/sections/ForBusinesses.jsx';
import TrustSection from './components/sections/TrustSection.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import FaqSection from './components/sections/FaqSection.jsx';
import FinalCta from './components/sections/FinalCta.jsx';
import ToastContainer from './components/ui/Toast.jsx';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StatsBar />
        <ComingSoon />
        <NotifyForm />
        <HowItWorks />
        <SearchDemo />
        <ForBusinesses />
        <TrustSection />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      {/* Global toast notifications — rendered outside main flow */}
      <ToastContainer />
    </>
  );
}

export default App;
