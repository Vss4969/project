import { Route, Routes } from 'react-router-dom';
import { ProblemList } from './pages/ProblemsList';
import { P1 } from './pages/P1';
import { P2 } from './pages/P2';
import { P3 } from './pages/P3';
import { P4 } from './pages/P4';
import { P5 } from './pages/P5';

function Problem() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProblemList/>}/>
        <Route path='/P1' element={<P1/>}/>
        <Route path='/P2' element={<P2/>}/>
        <Route path='/P3' element={<P3/>}/>
        <Route path='/P4' element={<P4/>}/>
        <Route path='/P5' element={<P5/>}/>
      </Routes>
    </>
  );
}

export default Problem;
