import React from "react";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <h1 className="text-center">Clase 2</h1>
      <h3>Llegamos al primer encuentro asincrónico de la materia...</h3>
      <p>
        Esta vez el encuentro cayó 16 de Abril, el fin de semana de semana
        santa.
      </p>
      <p>
        Me fui a Las Toninas este fin de semana, tenía un torneo de taekwondo el
        domingo 17 y todo el grupo de competidores de mi escuela nos fuimos
        desde el jueves para poder estar todos juntos en la playa unos dias
        antes del torneo
      </p>
      <iframe
        src="https://giphy.com/embed/LiIYpjOrE4G0w6BgNE"
        width="480"
        height="270"
        frameBorder="0"
        className="d-block mx-auto"
        allowFullScreen
      ></iframe>
      <p>
        El sabado no vi la clase asincrónica ya que entre la playa y los nervios
        del domingo me olvide de todo, pero gané el torneo y ya con tiempo en la
        semana la vi
      </p>
      <p>
        Idea que remarco de la clase:
        <b> "Una buena o mala clase es una posibilidad subjetiva"</b>
        <br />
        Una buena o mala clase no depende solamente de nuestra planificación, ya
        que para lo que a algunos alumnos les parezca bueno, a otros simplemente
        no los va a satisfacer.
      </p>
      <p>
        Por eso en el momento de planificar la clase tenemos que tener en
        cuenta:
      </p>
      <ul>
        <li>El sentido pedagógico: Por que estamos enseñando este contenido</li>
        <li>
          Las categorias conceptuales: Que hay en este tema para ser enseñado
        </li>
        <li>
          Los desafios cognitivos: Que queremos generar en nuestros
          alumnos(comprensio, resolucion, etc)
        </li>
        <li>El formato de la actividad: la organizacion de la clase</li>
        <li>
          Los recursos didacticos: materiales para el desarrollo de la clase
        </li>
        <li>El tiempo</li>
      </ul>
    </Container>
  );
};
