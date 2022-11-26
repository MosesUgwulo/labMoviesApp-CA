import React from 'react';
import SignUp from './signUp';
import Login from './Login';
import Dashboard from './Dashboard';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';

function App() {

  return (
        <Router>
          <AuthProvider>
          
            <Routes>
              <Route path='/' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              }
              />

              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />

            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;
