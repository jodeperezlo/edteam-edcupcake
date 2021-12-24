// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import Banner from '../molecules/Banner';
import CupcakePage from './CupcakePage';
import ServicesPage from './ServicesPage';

const HomePage = () => {
  return (
    <>
      <Banner />
      <CupcakePage path={'cupcakes?sabor_like=fresa'} />
      <ServicesPage path={'servicios'} title={'Servicios'} />
    </>
  );
};

export default HomePage;
