import './App.css';

import { ToastContainer } from 'react-toastify';
import Routers from './rou/Routes.jsx';
import { useLocation } from 'react-router-dom';
import Dashboard from './routes/Dashboard.jsx';

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {/* {pathname !== '/login' ? <Dashboard /> : <></>} */}
      {/* abc */}
      <Routers />
      <ToastContainer />
    </>
  )

}

export default App;
