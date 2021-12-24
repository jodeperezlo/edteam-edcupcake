// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import { string, number } from 'prop-types';

const CardCupcake = ({ sabor, descripcion, color, precio, imagen }) => {
  return (
    <article className='s-shadow-bottom'>
      {/* <!--Contenedor de la imagen--> */}
      <div className='s-ratio-16-9 img-container s-radius-tl s-radius-tr'>
        <img src={imagen} alt={sabor} />
      </div>
      {/* <!--Contenido--> */}
      <div className='s-bg-white s-pxy-2'>
        <h3>Cupcake sabor {sabor}</h3>
        <p className='s-mb-0'>{descripcion}</p>
      </div>
      <footer className='s-cross-center s-pxy-2 s-radius-br s-radius-bl'>
        {/* <!--Define el ancho máximo de la imagen--> */}
        <div className='s-12 s-mr-1'>
          <p className='s-mb-2 t5'>Color {color}</p>
        </div>
        {/* <!--Botón--> */}
        <div className='button s-to-right'>$ {precio} USD</div>
      </footer>
    </article>
  );
};

CardCupcake.propTypes = {
  sabor: string.isRequired,
  descripcion: string.isRequired,
  color: string.isRequired,
  precio: number.isRequired,
  imagen: string,
};

CardCupcake.defaultProps = {
  imagen:
    'https://i.pinimg.com/originals/b2/fc/49/b2fc4968c73cca735f54685ab1581521.png',
};

export default CardCupcake;
