

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Buttons } from "./Pages/Button";
import { Background } from "./Pages/Background";
import Cards from "./Pages/Cards";

const LoginPage = () => <h1>This is Login Page</h1>;


function App() {
  return (
   
      <Routes>
        
        <Route path="/" element={<Header />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cards" element={<Cards />} />
           <Route path="bg" element={<Background /> } />
                   <Route path="patterns" element={<h1>PATTERNS</h1> } />
                   <Route path="text" element={<h1>Text</h1> } />

          <Route path="" element={<h1>Welcome to UIbrIllance!</h1>} />
        </Route>
      </Routes>
  
  );
}

export default App;
