import React from 'react';
import './index.scss';
import { Link, useHistory } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import Logo from '../../static/images/logo.png'


const Sidebar = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  }
  return (
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    <div className='sidebarContainer'>
      <Menu right >
        <Link className='link' to='/about'>Tentang</Link>
        <Link className='link' to='/service'>Layanan</Link>
        <Link className='link' to='/gallery'>Galeri</Link>
        <Link className='link' to='/contact'>Kontak</Link>
      </Menu>
    </div>
  );
}

export default Sidebar;
