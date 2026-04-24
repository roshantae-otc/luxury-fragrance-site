import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '30px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Menu size={20} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
        <Link to="/shop" style={{ fontSize: '12px', letterSpacing: '0.15em', fontWeight: 400, textTransform: 'uppercase' }}>Shop</Link>
        <Link to="/about" style={{ fontSize: '12px', letterSpacing: '0.15em', fontWeight: 400, textTransform: 'uppercase' }}>About</Link>
      </div>

      <Link to="/" style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: '24px', 
        letterSpacing: '0.05em',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        MAISON OLFACTIVE
      </Link>

      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Search size={20} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
        <Link to="/auth">
          <User size={20} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
        </Link>
        <div 
          onClick={() => setIsCartOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span style={{ fontSize: '11px', letterSpacing: '0.1em' }}>({cartCount})</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
