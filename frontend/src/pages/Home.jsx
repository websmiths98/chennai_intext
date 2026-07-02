import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import FeaturedProjects from '../components/FeaturedProjects';
import ServicesOverview from '../components/ServicesOverview';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedProjects />
        <ServicesOverview />
        <TestimonialCarousel />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;