import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProblemSolutionSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;