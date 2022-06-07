import React from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default () => {
  let params = useParams();
  let claseActual = parseInt(params.id);
  return (
    <div
      className="p-3 d-flex justify-content-between"
      style={{ backgroundColor: "#2D3142" }}
    >
      {params.id > 1 ? (
        <a className="text-white" href={`/clase/${claseActual - 1}`}>
          clase anterior
        </a>
      ) : (
        <span></span>
      )}
      {params.id < 4 && (
        <a className="text-white" href={`/clase/${claseActual + 1}`}>
          clase siguiente
        </a>
      )}
    </div>
  );
};
