import React from 'react';
import {Header} from './Components/header/Header';
import { SearchItems } from './Components/searchSection/SearchItems';
import ListHotel from './Components/ListHotel';

export const App = () => {
  return (
    <div className="App">
       <Header/>
       <SearchItems/>
       <ListHotel/>
    </div>
  );
}
