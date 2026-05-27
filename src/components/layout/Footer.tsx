import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: 'var(--space-lg) 0', 
      borderTop: '1px solid var(--color-border)',
      marginTop: 'var(--space-xl)',
      color: 'var(--color-text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)' }}>
        <div>
          <div style={{ fontWeight: 800, color: 'var(--color-text)', marginBottom: 'var(--space-sm)', letterSpacing: '1px' }}>
            STRENGTH<span className="text-accent">LAB</span> PERFORMANCE
          </div>
          <p style={{ maxWidth: '300px' }}>Redefining the standard of performance through objective testing and elite coaching.</p>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: 'var(--space-sm)', fontSize: '0.8rem', letterSpacing: '2px' }}>CONTACT</h4>
          <p>Kade Kasey</p>
          <p>Phone: <a href="tel:2706178312" style={{ color: 'var(--color-text)' }}>270-617-8312</a></p>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: 'var(--space-sm)', fontSize: '0.8rem', letterSpacing: '2px' }}>SOCIAL</h4>
          <p><a href="https://instagram.com/strengthlabperformance" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p><a href="https://facebook.com/strengthlabperformance" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: 'var(--space-sm)', fontSize: '0.8rem', letterSpacing: '2px' }}>LOCATION</h4>
          <p>Louisville, Kentucky</p>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Strength Lab Performance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
