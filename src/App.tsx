import { Box, Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MethodPayment from "./pages/MethodPayment";
import Product from "./pages/Product";
import Quantity from "./pages/Quantity";
import Resume from "./pages/Resume";
import Surtidor from "./pages/Surtidor";
function App() {
  return (
    <Box w="100%" h="100vh">
      <Navbar />
      <Container paddingTop={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surtidor" element={<Surtidor />} />
          <Route path="/product" element={<Product />} />
          <Route path="/method-payment" element={<MethodPayment />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
