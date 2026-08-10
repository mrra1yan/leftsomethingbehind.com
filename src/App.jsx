import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import ComingSoon from './components/sections/ComingSoon.jsx';
import NotifyForm from './components/sections/NotifyForm.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import ForBusinesses from './components/sections/ForBusinesses.jsx';
import TrustSection from './components/sections/TrustSection.jsx';
import FinalCta from './components/sections/FinalCta.jsx';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ComingSoon />
        <NotifyForm />
        <HowItWorks />
        <ForBusinesses />
        <TrustSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
