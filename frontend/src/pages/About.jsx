import { motion } from 'framer-motion';

const About = () => {
  return (
    <main style={{ paddingTop: '150px' }}>
      <div className="container">
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Our Story</span>
            <h1 style={{ fontSize: '56px', margin: '30px 0' }}>The Art of <i>Slow</i> Perfumery</h1>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(26, 26, 26, 0.7)', marginBottom: '30px' }}>
              Founded in 2024, Maison Olfactive was born from a desire to return to the roots of traditional French perfumery while embracing a contemporary, minimalist aesthetic.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(26, 26, 26, 0.7)' }}>
              We do not follow trends. We follow the ingredients. Each of our fragrances is a narrative volume, capturing a specific moment, emotion, or landscape.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000" 
              alt="Maison Olfactive Atelier" 
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />
          </motion.div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 40px', margin: '0 -40px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '60px' }}>The Core Pillars</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
              <div>
                <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Naturality</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(26, 26, 26, 0.6)' }}>
                  We prioritize natural extracts and responsibly sourced raw materials, ensuring a profound connection to the earth.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Exclusivity</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(26, 26, 26, 0.6)' }}>
                  Produced in small batches in Grasse, France, each bottle is a unique testament to artisan patience.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Timelessness</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(26, 26, 26, 0.6)' }}>
                  Our scents are designed to transcend seasons, becoming a permanent part of your personal identity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
