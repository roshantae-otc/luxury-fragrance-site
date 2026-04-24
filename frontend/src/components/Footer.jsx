const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      padding: '80px 40px',
      marginTop: '100px'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px'
      }}>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Collections</h4>
          <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>The Library</li>
            <li>Nocturnal Tales</li>
            <li>Morning Dew</li>
            <li>Limited Editions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Assistance</h4>
          <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Shipping & Returns</li>
            <li>Store Locator</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Maison</h4>
          <ul style={{ listStyle: 'none', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Craftsmanship</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Newsletter</h4>
          <p style={{ fontSize: '13px', marginBottom: '15px' }}>Join the olfactory circle for exclusive updates.</p>
          <div style={{ display: 'flex', borderBottom: '1px solid #1A1A1A', paddingBottom: '5px' }}>
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '12px', 
                width: '100%',
                outline: 'none'
              }} 
            />
            <button style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Join</button>
          </div>
        </div>
      </div>
      <div style={{ 
        marginTop: '60px', 
        paddingTop: '20px', 
        borderTop: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        fontSize: '11px',
        letterSpacing: '0.05em',
        color: 'rgba(26, 26, 26, 0.6)'
      }}>
        © 2024 MAISON OLFACTIVE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
