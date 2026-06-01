import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero/Hero';
import SocialFeed from './components/Social/SocialFeed';
import Testimonials from './components/Testimonials/Testimonials';
import Onboarding from './components/Onboarding/Onboarding';

function App() {
  return (
    <Layout>
      <Hero />

      <section id="about" className="section container" style={{ borderTop: '1px solid var(--color-border)' }}> 
        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: 'var(--space-md)' }}>
          MEET <span style={{ color: 'var(--color-text-muted)' }}>KADE KASEY</span>
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
              Dedicated to helping you rebuild, transform, and exceed your potential.
              At Strength Lab Performance, our mission is to provide elite coaching
              that changes lives—no matter your starting point.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Whether you are recovering from injury, looking to drop weight,
              or simply wanting to level up your strength, Kade's personalized
              approach ensures you reach your goals with confidence.
            </p>
          </div>
          <div style={{ border: '1px solid var(--color-border)', height: '500px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img 
              src={`${import.meta.env.BASE_URL}assets/kade.png`} 
              alt="Kade Kasey" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      <SocialFeed />
      <Testimonials />
      <Onboarding />
    </Layout>
  );
}

export default App;
