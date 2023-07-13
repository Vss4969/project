import { Route, Routes } from 'react-router-dom';
import { ProblemList } from './pages/ProblemsList';
import { P1 } from './pages/P1';
import { P2 } from './pages/P2';

function Problem() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProblemList/>}/>
        <Route path='/P1' element={<P1/>}/>
        <Route path='/P2' element={<P2/>}/>
      </Routes>
    </>
  );
}

export default Problem;
