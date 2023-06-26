import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import HomePage from './pages/auth/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import VerifyEmail from './pages/auth/VerifyEmail';
import ProfilePage from './pages/profile/Dashboard/ProfilePage';
import Post from './pages/profile/FeedPage/Post';
import Setting from './pages/profile/Setting/Setting';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='overflow-x-hidden min-h-screen w-screen'>
      
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/verify-email' element={<VerifyEmail/>} />
        <Route exact path='/dashboard/my-profile' element={<ProfilePage />} />
        <Route exact path='/post' element={<Post/>} />
        <Route exact path='/setting' element={<Setting />}  />
      </Routes>
    </div>
  );
}

export default App;
