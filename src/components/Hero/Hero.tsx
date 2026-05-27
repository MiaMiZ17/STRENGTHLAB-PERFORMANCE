import React, { useState } from 'react';

const Hero = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <section id="home" className="section container" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: 'var(--space-xl) 0',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/assets/hero-bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{ maxWidth: '900px' }}>
        <h2 style={{ 
          color: 'var(--color-text)', 
          fontSize: '0.9rem', 
          letterSpacing: '4px', 
          fontWeight: 800, 
          marginBottom: 'var(--space-md)',
          borderLeft: '4px solid var(--color-text)',
          paddingLeft: 'var(--space-sm)'
        }}>
          OBJECTIFIED PERFORMANCE
        </h2>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
          lineHeight: 1.1, 
          fontWeight: 900, 
          marginBottom: 'var(--space-md)',
          letterSpacing: '-2px',
          textTransform: 'uppercase'
        }}>
          REDEFINING THE STANDARD OF COACHING
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
          color: 'var(--color-text)', 
          maxWidth: '700px', 
          lineHeight: 1.5, 
          marginBottom: 'var(--space-lg)',
          fontWeight: 500
        }}>
          High-performance athletic training facility focused on transforming 
          lives through elite coaching and personalized strength development.
        </p>
        
        <div className="flex" style={{ gap: 'var(--space-md)', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#book" className="btn-primary" style={{ minWidth: '200px', textDecoration: 'none', textAlign: 'center' }}>
            BOOK SESSION
          </a>
          
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowContactOptions(!showContactOptions)}
              style={{ 
                border: '2px solid #000', 
                padding: '0.8rem 2rem', 
                fontWeight: 700, 
                letterSpacing: '2px',
                transition: 'var(--transition-fast)',
                backgroundColor: showContactOptions ? '#000' : 'transparent',
                color: showContactOptions ? '#fff' : '#000',
                textTransform: 'uppercase'
              }}
            >
              CONTACT KADE
            </button>
            
            {showContactOptions && (
              <div style={{ 
                position: 'absolute', 
                top: '100%', 
                left: 0, 
                marginTop: '10px', 
                backgroundColor: '#fff', 
                border: '2px solid #000', 
                zIndex: 10,
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <a 
                  href="tel:2706178312" 
                  style={{ padding: '1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'center' }}
                  onClick={() => setShowContactOptions(false)}
                >
                  📞 CALL / TEXT
                </a>
                <a 
                  href="mailto:info@strengthlabperformance.com" 
                  style={{ padding: '1rem', fontWeight: 700, textAlign: 'center' }}
                  onClick={() => setShowContactOptions(false)}
                >
                  ✉️ EMAIL
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid" style={{ 
        marginTop: 'var(--space-xl)', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--space-lg)'
      }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-xs)' }}>
            STRENGTH <span className="text-accent">TRAINING</span>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Full body development tailored to your specific needs.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-xs)' }}>
            LIFESTYLE <span className="text-accent">TRANSFORMATION</span>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Building sustainable routines for long-term health.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-xs)' }}>
            ELITE <span className="text-accent">COACHING</span>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Compassionate, expert guidance to push your limits.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
