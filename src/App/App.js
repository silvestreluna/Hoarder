import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <button className="btn btn-danger">test</button>
        {console.error('test')}
      </div>
    );
  }
}
export default App;
