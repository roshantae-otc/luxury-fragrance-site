import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      height: '100vh', 
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    }}>
      {/* Background Image/Video */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <img 
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Fragrance" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: 0.7
          }} 
        />
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)'
        }}></div>
      </div>

      <div className="container" style={{ 
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#FFF'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ 
              fontSize: '12px', 
              letterSpacing: '0.4em', 
              textTransform: 'uppercase',
              marginBottom: '20px',
              display: 'block'
            }}
          >
            L'Art de Vivre
          </motion.span>

          <h1 style={{ 
            fontSize: 'clamp(48px, 8vw, 84px)', 
            lineHeight: 1.1, 
            marginBottom: '30px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 300
          }}>
            The Poetry of <br /><i>Scented</i> Tales
          </h1>

          <p style={{ 
            fontSize: '18px', 
            marginBottom: '40px', 
            maxWidth: '600px',
            margin: '0 auto 40px',
            opacity: 0.9,
            fontWeight: 300
          }}>
            Experience the essence of Parisian craftsmanship through our exclusive collection of fine fragrances.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button style={{ 
              backgroundColor: '#FFF', 
              color: '#000', 
              padding: '18px 45px', 
              fontSize: '12px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              fontWeight: 500
            }}>
              Shop Collection
            </button>
            <button style={{ 
              backgroundColor: 'transparent', 
              color: '#FFF', 
              padding: '18px 45px', 
              fontSize: '12px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.3)',
              fontWeight: 500
            }}>
              Discover More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          zIndex: 2
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFF' }}>Scroll</span>
        <div style={{ width: '1px', height: '60px', backgroundColor: '#FFF', opacity: 0.5 }}></div>
      </motion.div>
    </section>
  );
};

export default Hero;

