// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import { string, number } from 'prop-types';

const CardService = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <article className='s-shadow-bottom'>
      {/* <!--Contenedor de la imagen--> */}
      <div className='s-ratio-16-9 img-container s-radius-tl s-radius-tr'>
        <img src={imagen} alt={nombre} />
      </div>
      {/* <!--Contenido--> */}
      <div className='s-bg-white s-pxy-2'>
        <h3>{nombre}</h3>
        <p className='s-mb-0'>{descripcion}</p>
      </div>
      <footer className='s-cross-center s-pxy-2 s-radius-br s-radius-bl'>
        {/* <!--Botón--> */}
        <div className='button s-to-right'>$ {precio} USD</div>
      </footer>
    </article>
  );
};

CardService.propTypes = {
  nombre: string.isRequired,
  descripcion: string.isRequired,
  precio: number.isRequired,
  imagen: string.isRequired,
};

export default CardService;
