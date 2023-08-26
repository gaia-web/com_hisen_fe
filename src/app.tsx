import { useState } from 'preact/hooks'
import Router from 'preact-router';
import Home from './routes/Home/Home';
import AboutUs from './routes/AboutUs/AboutUs';


export function App() {
  return (
    <Router>
      <Home path="/" />
      <AboutUs path="/about" />
    </Router>
  )
}
