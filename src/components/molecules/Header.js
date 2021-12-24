// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { NavLink } from 'react-router-dom';

import { UilEstate } from '@iconscout/react-unicons';
import { UilStore } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons';

const Header = () => {
  return (
    <header className='ed-header s-bg-white s-py-1'>
      <div className='ed-grid lg-grid-5'>
        {/* <!-- Logo  --> */}
        <div className='s-cross-center s-main-center lg-main-start'>
          <img
            className='logo'
            src='https://ux.ed.team/img/edteam-ux.svg'
            alt='Logo EDteam'
          />
        </div>
        <nav className='nav lg-cols-4 s-cross-center ed-grid full'>
          {/* <!--  Menú de navegación    --> */}
          <ul className='menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1'>
            {/* <!--   Item de menú. Contiene link e ícono     --> */}
            <li className='lg-mr-3'>
              <NavLink className='link s-column s-cross-center' exact to='/'>
                {/* <!--  El ícono sólo se mostrará en la versión móvil  --> */}
                <svg className='icon to-lg s-mb-0'>
                  <UilEstate />
                </svg>

                <span>Inicio</span>
              </NavLink>
            </li>
            <li className='lg-mr-3'>
              <NavLink
                className='link s-column s-cross-center'
                exact
                to='/cupcakes'
              >
                <svg className='icon to-lg s-mb-0'>
                  <UilStore />
                </svg>

                <span>Cupcakes</span>
              </NavLink>
            </li>
            <li className='lg-mr-3'>
              <NavLink
                className='link s-column s-cross-center'
                exact
                to='/about'
              >
                <svg className='icon to-lg s-mb-0'>
                  <UilUsersAlt />
                </svg>
                <span>Nosotros</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
