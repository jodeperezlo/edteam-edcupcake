// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setdata] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/${endpoint}`)
      .then(({ data }) => setdata(data))
      .catch((error) => setError(error));
  }, [endpoint]);

  return [data, error];
};

export default useFetch;
