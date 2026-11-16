import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { ScriptEnhancer } from './pages/ScriptEnhancer';
import { Downloads } from './pages/Downloads';
import { GettingStarted } from './pages/GettingStarted';
import { OpenSource } from './pages/OpenSource';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { License } from './pages/License';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAEEDE] text-[#2C1030] selection:bg-[#EC5478] selection:text-white">
        <Navbar />
        <main className="flex-1" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/expore" element={<Explore />} />
            <Route path="/explore-mavs" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/script-enhancer" element={<ScriptEnhancer />} />
            <Route path="/download" element={<Downloads />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/license" element={<License />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
