import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Table from './components/table/Table';

function App() {
  return (
    <div className="app">
     <Table /> 
    </div>
  );
}

export default App;
