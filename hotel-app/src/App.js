import React from 'react';
import {Header} from './Components/header/Header';
import { SearchItems } from './Components/searchSection/SearchItems';

export const App = () => {
  return (
    <div className="App">
       <Header/>
       <SearchItems/>
    </div>
  );
}
