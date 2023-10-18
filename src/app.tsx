import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Router, Route } from "preact-router";
import Home from "./routes/Home/Home";
import AboutUs from "./routes/AboutUs/AboutUs";
import ContactUs from "./routes/ContactUs/ContactUs";
import EEMark from "./routes/EEMark/EEMark";
import ICT from "./routes/ImmigrationPathways/ICT/ICT";
import EntrepreneurBCPNP from "./routes/ImmigrationPathways/EntrepreneurBCPNP/EntrepreneurBCPNP";
import BCPNP from "./routes/ImmigrationPathways/BCPNP/BCPNP";
import Federation from "./routes/ImmigrationPathways/Federation/Federation";
import FamilyClass from "./routes/ImmigrationPathways/FamilyClass/FamilyClass";
import NotFound from "./routes/NotFound/NotFound";
import NewsUpdates from './routes/NewsUpdates/NewsUpdates';
import NewsDetail from './components/NewsDetail/NewsDetail';
import { useEffect, useState } from "preact/hooks";
import {
  applyLanguage,
  getLanguage,
  setForceUpdateFunction,
} from "./utils/language";

export function App() {
  const [_fakeState, setFakeState] = useState({});
  setForceUpdateFunction(() => setFakeState({}));

  useEffect(() => {
    document.title = applyLanguage(
      "海盛国际咨询有限公司",
      "Hisen International Consulting Ltd."
    );
  }, [getLanguage()]);

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
            <Route path="/entrepreneur-bcpnp" component={EntrepreneurBCPNP} />
            <Route path="/bcpnp" component={BCPNP} />
            <Route path="/federation" component={Federation} />
            <Route path="/family-class" component={FamilyClass} />
            <Route path="/mark" component={EEMark} />
            <Route path="/news" component={NewsUpdates} />
            <Route path="/news/detail" component={NewsDetail} />
            <Route default component={NotFound} />
          </Router>
        </Box>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  );
}
