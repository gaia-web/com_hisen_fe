import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import { Router, Route } from 'preact-router';
import Home from './routes/Home/Home';
import AboutUs from './routes/AboutUs/AboutUs';
import ContactUs from './routes/ContactUs/ContactUs';
import EEMark from './routes/EEMark/EEMark';
import NotFound from './routes/NotFound/NotFound';

export function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" minH="100vh">
        <Header></Header>
        <Box flex="1">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/mark" component={EEMark} />
            <Route default component={NotFound} />
          </Router>
        </Box>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  )
}
