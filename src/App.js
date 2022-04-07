import './App.css';
import { Container } from '@mui/material';
import * as React from 'react';
import EducationalContent from "./Components/EducationalContent";


function App() {
  return (
    <div 
      className = "Educational Website" 
    >
      <Container
        className = "container"
        style = {{
          marginTop: 30,
          marginBottom: 30
        }}
      >
          <EducationalContent/>
      </Container>
    </div>
  );
}

export default App;
