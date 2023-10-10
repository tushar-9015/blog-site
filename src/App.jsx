import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import login from './appwrite/auth';
import logout from './appwrite/auth';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))

  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-green-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
