import React, { useState } from 'react';
import './App.css'
import LoanList from './components/LoanList';
import Navbar from './components/Navbar';

function App() {


    return (
        <div>
          <Navbar />
          <div className="px-10 mt-10">
            <LoanList />
            </div>
        </div>
    );
}

export default App;
