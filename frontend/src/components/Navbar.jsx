import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, User, Heart, X } from 'lucide-react';
import { useStore } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen, wishlist } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.4s ease',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    color: isScrolled ? '#1A1A1A' : '#FFF',
    borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
  };

  const topBarStyle = {
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    padding: '8px 0',
    fontSize: '10px',
    textAlign: 'center',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    display: isScrolled ? 'none' : 'block',
  };

  const mainNavStyle = {
    padding: isScrolled ? '15px 40px' : '25px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1800px',
    margin: '0 auto',
  };

  const linkStyle = {
    fontSize: '12px',
    letterSpacing: '0.15em',
    fontWeight: 400,
    textTransform: 'uppercase',
    color: 'inherit',
  };

  return (
    <nav style={navStyle}>
      <div style={topBarStyle}>
        Complimentary Shipping on all Orders Over $150
      </div>
      
      <div style={mainNavStyle}>
        {/* Logo - Left */}
        <Link to="/" style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '22px', 
          letterSpacing: '0.05em',
          color: 'inherit'
        }}>
          MAISON OLFACTIVE
        </Link>

        {/* Desktop Menus - Center */}
        <div className="desktop-nav" style={{ 
          display: 'flex', 
          gap: '40px', 
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <Link to="/shop" style={linkStyle}>Shop</Link>
          <Link to="/shop?category=collections" style={linkStyle}>Collections</Link>
          <Link to="/about" style={linkStyle}>Our Story</Link>
          <Link to="/shop?category=gifts" style={linkStyle}>Gifts</Link>
        </div>

        {/* Icons - Right */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className="desktop-nav">
            <Search size={18} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
          </div>
          
          <Link to="/wishlist" style={{ position: 'relative' }}>
            <Heart size={18} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span style={{ 
                position: 'absolute', 
                top: '-8px', 
                right: '-8px', 
                fontSize: '9px', 
                backgroundColor: 'var(--accent-gold)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '14px', 
                height: '14px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/auth">
            <User size={18} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
          </Link>
          
          <div 
            onClick={() => setIsCartOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span style={{ fontSize: '11px', letterSpacing: '0.1em' }}>({cartCount})</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          backgroundColor: '#FFF',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 40px',
          gap: '30px'
        }}>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} style={{...linkStyle, fontSize: '18px', color: '#1A1A1A'}}>Shop</Link>
          <Link to="/shop?category=collections" onClick={() => setIsMobileMenuOpen(false)} style={{...linkStyle, fontSize: '18px', color: '#1A1A1A'}}>Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} style={{...linkStyle, fontSize: '18px', color: '#1A1A1A'}}>Our Story</Link>
          <Link to="/shop?category=gifts" onClick={() => setIsMobileMenuOpen(false)} style={{...linkStyle, fontSize: '18px', color: '#1A1A1A'}}>Gifts</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
