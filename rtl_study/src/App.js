import React from 'react';
import { Counter } from './features/counter/Counter';

import RenderInput from './tests/RenderInput/RenderInput';
import FrameworkList from './tests/FrameWorkList/FrameworkList';
import MockServer from './tests/MockServer/MockServer';

import './App.css';

function App() {
  /*追加 output関数*/
  const output = (text) => {
    console.log(text);
  };

  const data = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Angular',
    },
    {
      id: 3,
      item: 'Vue',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <RenderInput outputConsole={output} />
        <FrameworkList frameworks={data} />
        <MockServer />
      </header>
    </div>
  );
}

export default App;
