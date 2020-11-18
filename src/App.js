import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList';
function App() {


  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
