
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/home';

function App() {



  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}



export default App;
