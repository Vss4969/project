import { Route, Routes } from 'react-router-dom';
import { ProblemList } from './pages/ProblemsList';
import { getList } from './service/api';
import { PageNotFound } from './pages/PageNotFound';
import { PageTemplate } from './pages/PageTemplate';

const response = await getList({});
console.log(response);

function Problem() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProblemList/>}/>
        <Route path='/page_not_found' element={<PageNotFound/>}></Route>
        <Route path='/problem/:problemId' element={<PageTemplate/>}/>
      </Routes>
    </>
  );
}

export default Problem;
