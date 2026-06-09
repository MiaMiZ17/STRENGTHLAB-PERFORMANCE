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
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
              My passion for athletics started early. I began wakeboarding at just three years old alongside my dad and older brother, and from that point on, competition became a major part of my life. Whether it was wakeboarding, baseball, football, or any other sport I could get involved in, I was always training, competing, and looking for ways to improve.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
              At 12 years old, I achieved one of my biggest athletic accomplishments by winning the Wakeboarding World Championships in my age division. As I got older, my focus shifted toward football, eventually earning the opportunity to play at Wagner College. Throughout those years, I developed a deep appreciation for discipline, hard work, and the pursuit of high-level performance.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
              At the same time, I was facing challenges of my own. Beginning in fifth grade, I underwent my first knee surgery. What started as a single injury became a long journey that has included six knee surgeries, multiple repairs, a MACI cartilage restoration procedure, and additional arthroscopic surgeries. Rehabilitation became a constant part of my life, teaching me lessons about resilience, patience, and the importance of proper training that no textbook ever could.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
              My interest in fitness was also heavily influenced by my older brother. He was an accomplished weightlifter and CrossFit athlete who competed in Olympic weightlifting. His dedication to training helped shape my own passion for strength and conditioning. When he tragically passed away in 2020 during my senior year of high school, the impact was profound. His work ethic, passion, and commitment to self-improvement continue to inspire me every day.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
              Because I spent so much time in physical therapy throughout my athletic career, my first job was actually working in a physical therapy clinic, helping with daily operations and assisting wherever I could. Being surrounded by therapists, coaches, athletes, and patients gave me a unique perspective on both performance and recovery.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
              Today, that combination of athletic experience, injury recovery, and years of hands-on training is what drives me as a coach. I love helping people get stronger, move better, and perform at their highest level. But more importantly, I enjoy helping people overcome obstacles they may think are holding them back. Having experienced significant injuries myself, I understand how frustrating setbacks can be. My goal is to use the lessons I’ve learned through sport, rehabilitation, and strength training to help others avoid injuries when possible, recover when necessary, and realize they’re capable of more than they think.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              At StrengthLab Performance, I believe fitness is about more than building muscle or losing weight—it’s about building confidence, resilience, and the ability to live life without limitations. If my journey has taught me anything, it’s that setbacks don’t have to define your future. With the right plan, consistency, and mindset, incredible things are possible.
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
