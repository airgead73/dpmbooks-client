import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/loading';

function ProtectedRoutes() {

  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();
  if(loading) {
    return <Loading/>
  }
  return isAuthenticated ? <Outlet/> : loginWithRedirect()
}

export default ProtectedRoutes;