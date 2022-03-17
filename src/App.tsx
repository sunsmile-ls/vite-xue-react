import { useState } from 'react'
import Button from './packages/button/Button'
import './App.css'

function App() {

  return (
    <div className="App">
      <Button>Default</Button>
      <Button  type="primary">Primary</Button>
      <Button  type="dashed">Dashed</Button>
      <Button  type="danger">Danger</Button>
    </div>
  )
}

export default App
