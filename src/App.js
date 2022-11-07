import './App.css';
import React from 'react';
import TodoContainer from "./components/TodoContainer"

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
