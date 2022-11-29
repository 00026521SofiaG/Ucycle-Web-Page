import React from 'react';
import AppRouter from './Router/AppRouter'
import Header from './Components/Header/Header';



  

function App() {
  return (
  <>

   {/* aca debemos trabajar con respecto al login, debemos trabajarlo por div */}

   <div>
    <Header/>
   </div>

   
  
    <AppRouter /> 

  </>

  );
   

}

export default App;