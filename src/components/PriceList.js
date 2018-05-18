import React, { Component } from 'react';

class PriceList extends Component {
  render() {
    return (
      <div className="pricingContainer pricingContainer--animated">
        {/* <span className="priceList__text">Nuestros servicios destacados</span> */}

        <div className="priceList__Container">

          <div className="priceItemContainer">
            <h1 className="u-hidden">Traslados a Ezeiza</h1>
            <h1 className="u-hidden">Transfers a Ezeiza</h1>
            <h1 className="u-hidden">Camionetas a Ezeiza</h1>
            <h1 className="u-hidden">Traslados desde Ezeiza</h1>
            <h1 className="u-hidden">Transfers desde Ezeiza</h1>
            <h1 className="u-hidden">Camionetas desde Ezeiza</h1>
            <div className="priceItem__destinationContainer">
              <h2 className="priceItem__destination">Ezeiza</h2>
              <h2 className="priceItem__description">Traslados desde y hasta</h2>
            </div>
            <div className="separatorLine" />
            <div className="priceItem__priceContainer">
              <span className="priceItem__currency">AR$</span>
              <span className="priceItem__priceNumber">1.600</span>
            </div>
          </div>

          <div className="priceItemContainer">
            <h1 className="u-hidden">Traslados a Aeroparque</h1>
            <div className="priceItem__destinationContainer">
              <h2 className="priceItem__destination">Aeroparque</h2>
              <h2 className="priceItem__description">Traslados desde y hasta</h2>
            </div>
            <div className="separatorLine" />
            <div className="priceItem__priceContainer">
              <span className="priceItem__currency">AR$</span>
              <span className="priceItem__priceNumber">1.300</span>
            </div>
          </div>

          <div className="priceItemContainer">
            <h1 className="u-hidden">City Tour Privado</h1>
            <div className="priceItem__destinationContainer">
              <h2 className="priceItem__destination">City Tour</h2>
              <h2 className="priceItem__description">City Tour privado con guía</h2>
            </div>
            <div className="separatorLine" />
            <div className="priceItem__priceContainer">
              <span className="priceItem__currency">AR$</span>
              <span className="priceItem__priceNumber">900</span>
              <span className="priceItem__currency">/h</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceList;
