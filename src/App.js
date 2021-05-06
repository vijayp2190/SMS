
import React from 'react';
import routes from './system/route';
import Header from './common/header/header';
function App() {


  return (
    <div className="App">
      <Header/>
  
 {routes}
    </div>
  );
}

export default App;
