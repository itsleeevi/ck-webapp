import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroCardContainer from './components/HeroCardContainer';
import Layout from './components/Layout';
import HeroDetail from './components/HeroDetail';

function App() {
  return (
    <div className='border_pink'>
      <div className='inner_bg'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HeroCardContainer />} />
            </Route>
         
            <Route path="hero-detail/:id" element={<HeroDetail />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
