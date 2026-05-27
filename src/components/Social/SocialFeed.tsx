import React, { useEffect } from 'react';

const SocialFeed = () => {
  useEffect(() => {
    // Process the Instagram embed if the script is already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="section container" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
        FOLLOW THE <span style={{ color: 'var(--color-text-muted)' }}>GRIND</span>
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ maxWidth: '540px', width: '100%' }}>
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/strengthlabperformance/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14" 
            style={{ 
              background: '#FFF', 
              border: 0, 
              borderRadius: '3px', 
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
              margin: '1px', 
              width: 'calc(100% - 2px)'
            }}
          >
            <div style={{ padding: '16px' }}>
              <a 
                href="https://www.instagram.com/strengthlabperformance/?utm_source=ig_embed&amp;utm_campaign=loading" 
                style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
                <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg">
                    {/* SVG paths removed for brevity in file write, but keeping the link structure */}
                  </svg>
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>
                    View this profile on Instagram
                  </div>
                </div>
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

// Add global type for Instagram script
declare global {
  interface Window {
    instgrm: any;
  }
}

export default SocialFeed;
