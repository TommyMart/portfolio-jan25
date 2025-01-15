import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
