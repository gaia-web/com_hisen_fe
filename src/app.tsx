import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import { Router, Route } from 'preact-router';
import Home from './routes/Home/Home';
import AboutUs from './routes/AboutUs/AboutUs';

export function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" minH="100vh">
        <Header></Header>
        <Box flex="1">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
          </Router>
        </Box>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  )
}
