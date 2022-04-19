import React from 'react';
//Components
import Header from './components/Header';

//styles
import{ GlobalStyle} from './GlobalStyle';  
function App() {
  return (
    <div className="App">
      <Header/> 
      Start here.
      <GlobalStyle/>
    </div>
  );
}

export default App;
