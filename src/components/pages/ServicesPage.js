// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Loader from '../molecules/Loader';

import useFetch from '../../hooks/useFetch';
import CardService from '../organisms/CardService';

const ServicesPage = ({ path, title }) => {
  const [services, error] = useFetch(path);

  return services ? (
    <div className='ed-grid'>
      {title && <h2>{title}</h2>}
      {error && (
        <section className='s-mb-3 s-to-center column'>
          <h3>Error</h3>
          <p>{error}</p>
        </section>
      )}
      {services ? (
        <section className='ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap'>
          {services.map((service) => (
            <CardService
              key={service.id}
              nombre={service.nombre}
              descripcion={service.descripcion}
              imagen={service.imagen}
              precio={service.precio}
            />
          ))}
        </section>
      ) : (
        <section className='s-mb-3 s-to-center column'>
          <Loader />
        </section>
      )}
    </div>
  ) : (
    <section className='ed-grid s-mb-3 s-to-center column'>
      <h3>No hay servicios</h3>
      <p>No se han encontrado servicios para mostrar</p>
    </section>
  );
};

export default ServicesPage;
