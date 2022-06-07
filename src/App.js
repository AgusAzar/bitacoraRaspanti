import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Clases from "./clases";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="clase/:id" element={<Clases />} />
          <Route path="*" element={<Navigate to="/clase/1" />} />
        </Routes>
      </BrowserRouter>
      <div className="position-absolute bottom-0 p-5 w-100">
        <div className="text-center">
          <span>clases: </span>
          <a className="me-2 text-reset" href="/clase/1">
            1
          </a>
          <a className="me-2 text-reset" href="/clase/2">
            2
          </a>
          <a className="me-2 text-reset" href="/clase/3">
            3
          </a>
          <a className="me-2 text-reset" href="/clase/4">
            4
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
