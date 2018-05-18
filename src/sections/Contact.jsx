import React from 'react';
import WrappedRegistrationForm from '../components/RegistrationForm';

const Contact = () => (
  <div className="form">
    <div className="form__text">
      <h2 className="form__text-title">Dejanos tu consulta.</h2>
      {/* <h4 className="form__text-description">Escribinos indicando la fecha de tu viaje, la cantidad de pasajeros y maletas, y nuestro equipo le enviará la mejor opción.</h4> */}
    </div>
    <WrappedRegistrationForm />
  </div>
);

export default Contact;
