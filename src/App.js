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
    <Layout 
      title="Ether | All-in-One School Management Solution"
      description="Transform your school operations with Ether - the comprehensive SaaS platform for modern educational institutions."
      keywords="school management system, education software, B2B SaaS, student information system"
    >
      <HeroSection />
      <FeaturesSection />
      <ProblemSolutionSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;