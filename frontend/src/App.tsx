import { StrictMode, useState } from 'react'
import { Routes, Route } from 'react-router';
import { Button, Box } from '@mui/material';
import './App.css'
import HomePage from './HomePage.tsx';

function App() {
  

  return (
    < >
  
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  
    </>
  )
}

export default App
