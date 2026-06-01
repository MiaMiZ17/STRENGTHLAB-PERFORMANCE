import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ 
      padding: 'var(--space-sm) 0', 
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(15px)',
      zIndex: 1000
    }}>
      <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo.png`} 
            alt="Strength Lab Performance Logo" 
            style={{ height: '40px', width: 'auto' }} 
          />
          <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '1px', lineHeight: 1 }}>
            STRENGTH<span className="text-accent">LAB</span><br/>
            <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>PERFORMANCE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="flex" style={{ gap: 'var(--space-lg)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px' }}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#book" className="text-accent">BOOK</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ display: 'none', color: 'var(--color-text)', fontWeight: 800, fontSize: '0.8rem' }}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 60px)',
          backgroundColor: 'var(--color-bg)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-lg)'
        }}>
          <a href="#home" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 800 }}>HOME</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 800 }}>ABOUT</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 800 }}>SERVICES</a>
          <a href="#book" onClick={() => setIsMenuOpen(false)} className="text-accent" style={{ fontSize: '1.5rem', fontWeight: 800 }}>BOOK</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 800 }}>CONTACT</a>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        nav a { transition: var(--transition-fast); }
        nav a:hover { color: var(--color-accent); }
      `}} />
    </header>
  );
};

export default Header;
