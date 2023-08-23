import { Route, Routes } from 'react-router-dom';
import { PageTemplate } from './pages/pageTemplate';
import { ProblemList } from './pages/problemsList';
import { getList } from './service/api';
import { PageNotFound } from './pages/pageNotFound';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { Submissions } from './pages/submissions';

const response = await getList({});
console.log(response);

function Problem() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProblemList/>}/>
        <Route path='/page_not_found' element={<PageNotFound/>}></Route>
        <Route path='/problem/:problemId' element={<PageTemplate/>}/>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/submissions' element={<Submissions/>}></Route>
      </Routes>
    </>
  );
}

export default Problem;
