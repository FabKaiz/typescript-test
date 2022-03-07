import React from 'react';

import Header from './Header'
import InputField from './components/InputField/InputField';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="Taskify" color='#1CE' />
      <InputField />
    </div>
  );
}

export default App;
