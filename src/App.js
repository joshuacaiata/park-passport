import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Disneyland from './pages/disneyland/Disneyland';
import Layout from './components/layout/Layout';
import MagicKingdom from './pages/disneyworld/magic kingdom/MagicKingdom';
import AnimalKingdom from './pages/disneyworld/animal kingdom/AnimalKingdom';
import Epcot from './pages/disneyworld/epcot/Epcot';
import HollywoodStudios from './pages/disneyworld/hollywood studios/HollywoodStudios';
import CaliforniaAdventure from './pages/disneyland/CaliforniaAdventure';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='disneyland' element={<Disneyland />} />
        <Route path='magickingdom' element={<MagicKingdom />} />
        <Route path='animalkingdom' element={<AnimalKingdom />} />
        <Route path='epcot' element={<Epcot />} />
        <Route path='hollywoodstudios' element={<HollywoodStudios />} />
        <Route path='californiaadventure' element={<CaliforniaAdventure />} />
      </Routes>
    </Layout>
  );
}

export default App;
