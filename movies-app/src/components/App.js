import React from 'react';
import SignUp from './signUp';
import Login from './Login';
import Dashboard from './Dashboard';
import Container from 'react-bootstrap/Container';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <Container className='d-flex align-items-center justify-content-center'
    style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
          
            <Routes>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />

              <Route path='/' element={
              <PrivateRoute >
                <Dashboard />
              </PrivateRoute>
              }
              />
              

            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
