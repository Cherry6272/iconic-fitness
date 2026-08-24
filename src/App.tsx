import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { EnquiryModal } from '@/components/ui/EnquiryModal';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Facility } from '@/pages/Facility';
import { Programs } from '@/pages/Programs';
import { Trainers } from '@/pages/Trainers';
import { Transformations } from '@/pages/Transformations';
import { Membership } from '@/pages/Membership';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';

// Scroll to top helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProgram, setEnquiryProgram] = useState<string>('');

  const handleOpenEnquiry = (programTitle?: string) => {
    if (programTitle) {
      setEnquiryProgram(programTitle);
    } else {
      setEnquiryProgram('');
    }
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-zinc-100 flex flex-col justify-between selection:bg-accent selection:text-dark-950">
      <ScrollToTop />
      <CustomCursor />
      
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<About onOpenEnquiry={() => handleOpenEnquiry()} />} />
          <Route path="/facility" element={<Facility onOpenEnquiry={() => handleOpenEnquiry()} />} />
          <Route path="/programs" element={<Programs onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/trainers" element={<Trainers onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/transformations" element={<Transformations onOpenEnquiry={() => handleOpenEnquiry()} />} />
          <Route path="/membership" element={<Membership onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost onOpenEnquiry={() => handleOpenEnquiry()} />} />
          <Route path="*" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton onOpenEnquiry={() => handleOpenEnquiry()} />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        defaultProgram={enquiryProgram}
      />
    </div>
  );
};

export function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
