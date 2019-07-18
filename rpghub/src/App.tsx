import * as React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

const App: React.FC = () => {
  let [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" onClick={() => setCount(count += 1)}>Increment</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {count}
        </a>
      </header>
    </div>
  );
}

export default App;
