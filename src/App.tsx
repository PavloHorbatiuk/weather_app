import React from 'react';
import { Main } from './component/Main';
import { UIContextProvider } from './UIContext';


function App() {


  return (
    <UIContextProvider >
      <Main />
    </UIContextProvider>
  );
}

export default App;
