import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
