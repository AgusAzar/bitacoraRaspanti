import React from "react";
import { Container } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import Header from "../header";
import Clase1 from "./clase1";
import Clase2 from "./clase2";
import Clase3 from "./clase3";
import Clase4 from "./clase4";

export default () => {
  let params = useParams();
  if (isNaN(parseInt(params.id)) || params.id > 4 || params.id < 1)
    return <Navigate to="/clase/1" />;
  return (
    <div className="h-100">
      <Header />
      <Container>
        {
          {
            1: <Clase1 />,
            2: <Clase2 />,
            3: <Clase3 />,
            4: <Clase4 />,
          }[params.id]
        }
      </Container>
    </div>
  );
};
