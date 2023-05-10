import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './routes/HomePage';
import DisplayPage from './components/Display';
import CalculatorPage from './routes/CalculatorPage';
import QuotePage from './routes/QuotePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DisplayPage />}>
        <Route index element={<HomePage />} />
        <Route path="/Calculator" element={<CalculatorPage />} />
        <Route path="/Quotes" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}

export default App;
