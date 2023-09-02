import { Route, Routes } from 'react-router-dom';
import { PageTemplate } from './pages/pageTemplate';
import { ProblemList } from './pages/problemsList';
import { getList } from './service/api';
import { PageNotFound } from './pages/pageNotFound';
import Signup from './pages/signup';
import Login from './pages/login';
import { Submissions } from './pages/submissions';
import { useLogout } from './hooks/useLogout';
import { useAuthContext } from './hooks/useAuthContext';

const response = await getList({});
console.log(response);

function Problem() {
  const {logout} = useLogout();
  const {user} = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
    {user && ( <div>
      <div>{user.userId}</div>
      <button onClick={handleClick}>Logout</button>
     </div>)}
      <Routes>
        <Route path='/' element={<ProblemList/>}/>
        <Route path='/page_not_found' element={<PageNotFound/>}></Route>
        <Route path='/problem/:problemId' element={<PageTemplate/>}/>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/submissions' element={<Submissions/>}></Route>
      </Routes>
    </>
  );
}

export default Problem;
