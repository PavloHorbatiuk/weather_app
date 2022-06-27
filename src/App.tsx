import React from 'react';
import {Main} from './component';
import {UIContextProvider} from './UIContext';


function App() {


    return (
        <UIContextProvider>
            <Main/>
        </UIContextProvider>
    );
}

export default App;
