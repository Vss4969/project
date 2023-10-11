import { Route, Routes, Navigate } from 'react-router-dom';
import { PageTemplate } from './pages/pageTemplate';
import { ProblemList } from './pages/problemsList';
import { getList } from './service/api';
import { PageNotFound } from './pages/pageNotFound';
import Signup from './pages/signup';
import Login from './pages/login';
import Editor from './pages/editor';
import { Submissions } from './pages/submissions';
// import { useLogout } from './hooks/useLogout';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';

const response = await getList({});
console.log(response);

function Problem() {
  // const {logout} = useLogout();
  const {user} = useAuthContext();

  // const handleClick = () => {
  //   logout();
  // };

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProblemList/>}/>
        <Route path='/page_not_found' element={<PageNotFound/>}></Route>
        <Route path='/problem/:problemId' element={<PageTemplate/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to="/" />}></Route>
        <Route path='/login' element={!user ? <Login/> : <Navigate to="/" />}></Route>
        <Route path='/submissions' element={user ? <Submissions/> : <Navigate to="/" />}></Route>
        <Route path='/editor' element={<Editor/>}></Route>
      </Routes>
    </>
  );
}

export default Problem;
