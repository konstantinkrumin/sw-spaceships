import React, { useState, useEffect } from 'react';
import './styles/main.scss';

import useFetch from './helpers/fetchData';

import SetupContainer from './components/SetupContainer';
import OutputContainer from './components/OutputContainer';

import Context from './context';

export default function App() {
  const [numSpaceshipsTotal, setNumSpaceshipsTotal] = useState();
  const [numSpaceshipsShow, setNumSpaceshipsShow] = useState();
  const [spaceshipsCompare, setSpaceshipsCompare] = useState([]);

  const [nameList, setNameList] = useState();

  const DATA_LINK = 'https://swapi.dev/api/starships/';
  const [data, loading] = useFetch(DATA_LINK);

  const extractNames = (data) => {
    return data.map((item) => item.name);
  };

  useEffect(() => {
    if (data.length !== 0) {
      setNumSpaceshipsTotal(data.length);
      setNameList(extractNames(data));
    }
  }, [loading]);

  if (loading === false) {
    return (
      <Context.Provider
        value={{
          data,
          nameList,
          numSpaceshipsTotal,
          numSpaceshipsShow,
          setNumSpaceshipsShow,
          spaceshipsCompare,
          setSpaceshipsCompare,
        }}
      >
        <div className="main-container">
          <SetupContainer />
          <OutputContainer />
        </div>
      </Context.Provider>
    );
  } else {
    return (
      <div className="loading-message-container">
        <div className="loading-message-text">LOADING ...</div>
      </div>
    );
  }
}
