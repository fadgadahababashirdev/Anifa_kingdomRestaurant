import React from 'react'
import "./App.css"
import { Routes ,Route } from 'react-router-dom'
import Landing from "./Components/Landing"
const App = () => {
  return (
    <Routes>
      <Route path="/"element={<Landing/>}></Route>
    </Routes>
  )
}

export default App