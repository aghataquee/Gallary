import { useState } from 'react'
import {Link} from 'react-router-dom';
import Customroutes from './routes/Customroutes'

import './App.css'


function App() {
  

  return (
      <div className="component">
        <h1 id="heading"><Link to="/">Gallarylist</Link></h1>
        <Customroutes/>

      </div>
  )
}

export default App
