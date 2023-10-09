import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Router, Route } from 'preact-router';
import Home from './routes/Home/Home';
import AboutUs from './routes/AboutUs/AboutUs';
import ContactUs from './routes/ContactUs/ContactUs';
import EEMark from './routes/EEMark/EEMark';
import ICT from './routes/ImmigrationPathways/ICT/ICT';
import EntrepreneurBCPNP from './routes/ImmigrationPathways/EntrepreneurBCPNP/EntrepreneurBCPNP';
import BCPNP from './routes/ImmigrationPathways/BCPNP/BCPNP';
import NotFound from './routes/NotFound/NotFound';
import NewsUpdates from './routes/NewsUpdates/NewsUpdates';

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
            <Route path="/ict" component={ICT} />
            <Route path="/EntrepreneurBCPNP" component={EntrepreneurBCPNP} />
            <Route path="/BCPNP" component={BCPNP} />
            <Route path="/mark" component={EEMark} />
            <Route path="/news" component={NewsUpdates} />
            <Route default component={NotFound} />
          </Router>
        </Box>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  )
}
