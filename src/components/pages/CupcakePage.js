// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import CardsCupcake from '../organisms/CardCupcake';
import Loader from '../molecules/Loader';
import useFetch from '../../hooks/useFetch';

const CupcakePage = ({ path, title }) => {
  const [cupcakes, error] = useFetch(path);

  return (
    <div className='ed-grid'>
      {title && <h2>{title}</h2>}
      {error && (
        <section className='s-mb-3 s-to-center column'>
          <h3>Error</h3>
          <p>{error}</p>
        </section>
      )}
      {cupcakes ? (
        <section className='ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap'>
          {cupcakes.map((cupcake) => (
            <CardsCupcake
              key={cupcake.id}
              sabor={cupcake.sabor}
              color={cupcake.color}
              descripcion={cupcake.descripcion}
              imagen={cupcake.imagen}
              precio={cupcake.precio}
            />
          ))}
        </section>
      ) : (
        <section className='s-mb-3 s-to-center column'>
          <Loader />
        </section>
      )}
    </div>
  );
};

export default CupcakePage;
