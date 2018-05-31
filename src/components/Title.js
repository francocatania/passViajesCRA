import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="titleContainer titleContainer--animated">
        <h1 className="titleContainer__titleText">Traslados in/out Ezeiza y Aeroparque</h1>
        <h2 className="titleContainer__descriptionText">Servicio de transporte privado para CABA y Gran Buenos Aires. Con una capacidad de hasta <span className="titleContainer__relevant-text">7 pasajeros</span>, ofrecemos la alternativa perfecta para viajes familiares y coroporativos. Consulte por todos nuestros servicios.</h2>
      </div>
    );
  }
}

export default Title;
