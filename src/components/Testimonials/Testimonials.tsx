import React from 'react';

const testimonials = [
  {
    name: "Toni",
    text: "I have been working out with Kade for almost 4 yrs now. I am a 32 year Ford employee that has issues with my knees and feet. Kade and I focus on full body strength training. He modifies the workouts to help me get a good workout even with my limitations. He has great knowledge in nutrition and is easy to talk to. I recommend contacting Kade Kasey if you are looking for a great personal trainer and person."
  },
  {
    name: "David",
    text: "Thanks to Kade’s training, I transformed my life—dropping from 300 lbs to 232 lbs, improving mobility, and building healthy routines that last. His dynamic, personalized workouts and positive, friendly attitude kept me motivated every step of the way. If you want real results and a coach who truly cares, Kade is the one. 💪"
  },
  {
    name: "Jacob N",
    text: "Working with kade has been great. He is compassionate and will really push you. For those just starting out Kade is a great choice"
  },
  {
    name: "Dan V",
    text: "After being bedridden for nearly a year and recovering from a serious spinal injury, I was extremely weak—walking was a challenge. Kade’s deep knowledge and well-rounded approach got me moving again. What really made the difference was his encouragement and confidence in me, even at my lowest. Today, I’m active, training in my own home gym, and living a life I once thought wasn’t possible. He doesn’t just train people—he changes lives."
  },
  {
    name: "Emil",
    text: "Kade is an awesome trainer. On top of being fun to talk to during workouts, he is attentive, listens to concerns, and answers questions knowledgeably. His determination to see me succeed helps motivate me to do better."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section container" style={{ borderTop: '1px solid var(--color-border)' }}>
      <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
        CLIENT <span style={{ color: 'var(--color-text-muted)' }}>SUCCESS</span>
      </h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ 
            padding: 'var(--space-md)', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-bg-alt)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: 'var(--space-md)', fontSize: '1rem', lineHeight: 1.6 }}>
              "{t.text}"
            </p>
            <div style={{ fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
              — {t.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
