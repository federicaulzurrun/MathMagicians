import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const DisplayPage = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default DisplayPage;
