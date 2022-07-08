import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "purple", flexGrow: 0 }}
      >
        My Container
      </Container>
    </>
  );
}

export default App;
