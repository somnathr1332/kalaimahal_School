import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Loader from './components/layout/Loader';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Campus = lazy(() => import('./pages/Campus'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Events = lazy(() => import('./pages/Events'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/academics" element={<Academics />} />
                  <Route path="/campus" element={<Campus />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/admissions" element={<Admissions />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
