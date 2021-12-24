// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='main-banner img-container diagonal dark-color'>
      <div className='ed-grid lg-grid-6'>
        <div className='lg-cols-4 lg-x-2'>
          <img
            className='main-banner__img'
            src='https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb'
            alt='Banner Background'
          />
          <div className='main-banner__data s-center'>
            <p className='s-mb-0 t2'>Bienvenido a EDcupcakes</p>
            <p>¡Un sitio lleno de sabor!</p>
            <Link className='button' to='/cupcakes'>
              Mira todos nuestros cupcakes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
