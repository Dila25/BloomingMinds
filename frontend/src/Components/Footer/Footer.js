import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} BloomingMinds. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
