import React, { Component } from 'react';


const PriceList = () => {
  return (
    <div className="pricingContainer pricingContainer--animated">
      {/* <span className="priceList__text">Nuestros servicios destacados</span> */}

      <div className="priceList__Container">

        <div className="priceItemContainer">
          <div className="priceItem__destinationContainer">
            <h2 className="priceItem__destination">Ezeiza</h2>
            <h2 className="priceItem__description">Traslados desde o hasta</h2>
            <h2 className="priceItem__description">Peajes incluidos</h2>
          </div>
          <div className="separatorLine" />
          <div className="priceItem__priceContainer">
            <div className="priceItem__priceTextContainer">
              <span className="priceItem__text">Desde</span>
              <span className="priceItem__currency">AR$</span>
            </div>  
            <span className="priceItem__priceNumber">2.300</span>
          </div>
        </div>

        <div className="priceItemContainer">
          <h1 className="u-hidden">Traslados a Aeroparque</h1>
          <div className="priceItem__destinationContainer">
            <h2 className="priceItem__destination">Aeroparque</h2>
            <h2 className="priceItem__description">Traslados desde o hasta</h2>
            <h2 className="priceItem__description">Peajes incluidos</h2>
          </div>
          <div className="separatorLine" />
          <div className="priceItem__priceContainer">
            <div className="priceItem__priceTextContainer">
              <span className="priceItem__text">Desde</span>
              <span className="priceItem__currency">AR$</span>
            </div>  
            <span className="priceItem__priceNumber">1.500</span>
          </div>
        </div>

        <div className="priceItemContainer">
          <h1 className="u-hidden">City Tour Privado</h1>
          <div className="priceItem__destinationContainer">
            <h2 className="priceItem__destination">City Tour</h2>
            <h2 className="priceItem__description">City Tour privado</h2>
            <h2 className="priceItem__description">Precio por hora</h2>
          </div>
          <div className="separatorLine" />
          <div className="priceItem__priceContainer">
            <div className="priceItem__priceTextContainer">
              <span className="priceItem__text">Desde</span>
              <span className="priceItem__currency">AR$</span>
            </div>  
            <span className="priceItem__priceNumber">750</span>
            <span className="priceItem__currency">/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
