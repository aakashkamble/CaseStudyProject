import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserHome from './pages/UserHome';
import Tests from './pages/Tests';
import Questions from './pages/Questions';
import Enrollment from './pages/Enrollment';
import Exams from './pages/Exams';
import StartExam from './pages/StartExam';
import ResultExam from './pages/ResultExam';

function App() {
  return (
    <div className="App">
      <ToastContainer 
      position="top-right"
      autoClose={4000}
      /> 
      <BrowserRouter>      
        <Routes>
          <Route element={<LoginPage />} path="/" exact />                    
          <Route element={<RegisterPage/>} path="/register"/>                                                          
          <Route element={<Dashboard/>} path="/dashboard"/>                              
          <Route element={<Users/>} path="/users"/>                              
          <Route element={<Tests/>} path="/tests"/>                              
          <Route element={<Exams/>} path="/exams"/>                              
          <Route element={<StartExam/>} path="/start/:examid"/>                              
          <Route element={<ResultExam/>} path="/result/:examid"/>                              
          <Route element={<Enrollment/>} path="/enrollment"/>                              
          <Route element={<Questions/>} path="/questions/:testid"/>                              
          <Route element={<UserHome/>} path="/profile"/>                              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
