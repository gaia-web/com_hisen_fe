import { ChakraProvider } from '@chakra-ui/react';
import Router from 'preact-router';
import Home from './routes/Home/Home';
import AboutUs from './routes/AboutUs/AboutUs';


export function App() {
  return (
    <ChakraProvider>
      <Router>
        <Home path="/" />
        <AboutUs path="/about" />
      </Router>
    </ChakraProvider>
  )
}
