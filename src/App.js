import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Disneyland from './pages/disneyland/Disneyland';
import Layout from './components/layout/Layout';
import MagicKingdom from './pages/disneyworld/magic kingdom/MagicKingdom';
import AnimalKingdom from './pages/disneyworld/animal kingdom/AnimalKingdom';
import Epcot from './pages/disneyworld/epcot/Epcot';
import HollywoodStudios from './pages/disneyworld/hollywood studios/HollywoodStudios';
import CaliforniaAdventure from './pages/disneyland/CaliforniaAdventure';
import React from 'react';
import California from './pages/california/California';
import Florida from './pages/florida/Florida';
import { useState, useEffect } from 'react';

function App() {

  const [totalCount, setTotalCount] = useState(() => {
    const saved = localStorage.getItem('total count');
    const initialVal = JSON.parse(saved);
    return initialVal || 0;
  });

  useEffect(() => {
    localStorage.setItem('total count', JSON.stringify(totalCount));
  })

  function incrementTotal() {
    setTotalCount(totalCount + 1);
  }

  function decrementTotal() {
    setTotalCount(totalCount - 1);
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage total={totalCount}/>} />
        <Route path='disneyland' element={<Disneyland total={totalCount} inc={incrementTotal} dec={decrementTotal}/>} />
        <Route path='magickingdom' element={<MagicKingdom total={totalCount} inc={incrementTotal} dec={decrementTotal}/>} />
        <Route path='animalkingdom' element={<AnimalKingdom total={totalCount} inc={incrementTotal} dec={decrementTotal}/>} />
        <Route path='epcot' element={<Epcot total={totalCount} inc={incrementTotal} dec={decrementTotal}/>} />
        <Route path='hollywoodstudios' element={<HollywoodStudios total={totalCount} inc={incrementTotal} dec={decrementTotal}/>} />
        <Route path='californiaadventure' element={<CaliforniaAdventure total={totalCount} inc={incrementTotal} dec={decrementTotal}/>} />
        <Route path='california' element={<California />} />
        <Route path='florida' element={<Florida />} />
      </Routes>
    </Layout>
  );
}

export default App;
