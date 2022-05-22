import React from 'react';
import "../styles/Header.scss";

const Header = () => {
    return(
        <body>
          <div className='header'>
              <div className='navbar-left'>
              <ul>
                  <li>Dogstagram</li>
              </ul>
            </div>

              <div className='search-nav'>
              <ul>
                  <input type="search" className="search-bar" placeholder='search'/>
                  <img src='https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png' className='lupa' />
              </ul>  
              </div>

              <div className='navbar-right'>
              <ul className='icons'>
                  <img src='https://i.imgur.com/zdIsfXg.png' alt='home' />
                  <img src='https://i.imgur.com/HvRGvxk.png' alt='favourites' />
                  <a className='profile'></a>
              </ul>
              </div>
          </div>
        </body>
    );
}

export default Header;