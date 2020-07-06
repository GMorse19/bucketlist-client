import React from 'react'
import './App.scss'

import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import RangeSlider from '../RangeSlider/RangeSlider'

function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
      <RangeSlider />
    </div>
  );
}

export default App;
