import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';


const Sidebar = () => {
  return (
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    <div className='sidebarContainer'>
      <Menu right >
        <Link className='sidebar-link' to='/'>Home</Link>
        <Link className='sidebar-link' to='/about'>Tentang</Link>
        <Link className='sidebar-link' to='/service'>Layanan</Link>
        <Link className='sidebar-link' to='/gallery'>Galeri</Link>
        <Link className="sidebar-link" to="/portfolio">Portfolio</Link>
        <Link className='sidebar-link' to='/contact'>Kontak</Link>
      </Menu>
    </div>
  );
}

export default Sidebar;
