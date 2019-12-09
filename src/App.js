import React from 'react';
import Forms from './components/Forms';

function App(){
  return(
  <div className='row'>
    <div className='col-md-3'></div>
    <div className='col-md-6 row-cus'>
      <Forms/>
    </div>
    <div className='col-md-3'></div>
  </div>
  )
}

export default App;