
import React from 'react';
import Header from './components/Header';
import Online from './components/Online';


function App() {
  return (
    <div>
   <div>
     <Header />
   </div>
   <div id="body">
     <div id="menu">Menu</div>
     <div id="centerArea">Center</div>
     <div id="online"><Online /></div>
   </div>
   </div>
  );
}

export default App;
