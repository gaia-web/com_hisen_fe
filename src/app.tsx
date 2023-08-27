import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Router from 'preact-router';
import Home from './routes/Home/Home';
import AboutUs from './routes/AboutUs/AboutUs';

export function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" minH="100vh">
        <Header></Header>
        <Box flex="1">
          <Router>
            <Home path="/" />
            <AboutUs path="/about" />
          </Router>
        </Box>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  )
}
