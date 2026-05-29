import React, { useEffect, useRef } from 'react';

const Onboarding = () => {
  return (
    <section id="book" className="section container" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
        GET <span style={{ color: 'var(--color-text-muted)' }}>STARTED</span>
      </h2>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
        
        {/* Questionnaire */}
        <div style={{ padding: 'var(--space-md)', border: '1px solid var(--color-border)', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: 900, marginBottom: 'var(--space-sm)' }}>1. INTAKE FORM</h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>Help me understand your goals and background.</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScjQNCUM4UToII_lDhs4aFiS41q-GZHxZKYqswM9-NXR9njWQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textDecoration: 'none' }}>
            FILL OUT FORM
          </a>
        </div>

        {/* Booking -> Direct Contact */}
        <div style={{ padding: 'var(--space-md)', border: '1px solid var(--color-border)', textAlign: 'center', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: '#fff', color: '#000', padding: 'var(--space-md)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 900, marginBottom: 'var(--space-sm)' }}>2. BOOK SESSION</h3>
              <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>Contact Kade directly to schedule your consult or first session.</p>
            </div>
            
            <div className="flex" style={{ flexDirection: 'column', gap: 'var(--space-sm)', width: '100%' }}>
              <a href="tel:2706178312" className="btn-primary" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                📞 CALL / TEXT
              </a>
              <a href="mailto:Strengthlabperformance@gmail.com" className="btn-primary" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', width: '100%', backgroundColor: '#fff', color: '#000' }}>
                ✉️ EMAIL ME
              </a>
            </div>
          </div>
        </div>

        {/* Waiver */}
        <div style={{ padding: 'var(--space-md)', border: '1px solid var(--color-border)', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: 900, marginBottom: 'var(--space-sm)' }}>3. SIGN WAIVER</h3>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>Digital signature required before your first session.</p>
          </div>
          <a href="#waiver-details" className="btn-primary" style={{ display: 'block', textDecoration: 'none' }}>
            REVIEW & SIGN
          </a>
        </div>

      </div>

      {/* Waiver Section */}
      <div id="waiver-details" style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-lg)', border: '1px solid #000', textAlign: 'center' }}>
        <h3 style={{ fontWeight: 900, marginBottom: 'var(--space-md)' }}>LIABILITY WAIVER & RELEASE</h3>
        <p style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-text-muted)' }}>Please review and sign the waiver below before your first session.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
          <iframe 
            title="STRENGTHLAB PERFORMANCE LIABILITY WAIVER & RELEASE OF LIABILITY" 
            src="https://www.jotform.com/sign/261467541448059/invite/01ksp00rkr607fdc7d42087ac4?signEmbed=1" 
            style={{ height: '700px', width: '100%', maxWidth: '800px', border: 0 }}
          ></iframe>
        </div>
      </div>

      {/* Contact CTA */}
      <div style={{ 
        marginTop: 'var(--space-xl)', 
        padding: 'var(--space-xl) var(--space-md)', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center',
        border: '1px solid #000'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 'var(--space-md)' }}>READY TO LEVEL UP?</h2>
        <p style={{ marginBottom: 'var(--space-lg)', fontWeight: 600 }}>Call, Text, or Email directly.</p>
        <div className="flex" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <a href="tel:2706178312" className="btn-primary" style={{ textDecoration: 'none' }}>📞 (270) 617-8312</a>
          <a href="mailto:Strengthlabperformance@gmail.com" className="btn-primary" style={{ textDecoration: 'none', backgroundColor: '#fff', color: '#000' }}>✉️ EMAIL ME</a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}} />
    </section>
  );
};

export default Onboarding;
