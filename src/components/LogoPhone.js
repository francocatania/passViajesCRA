import React, { Component } from 'react';

class LogoPhone extends Component {
  render() {
    return (
      <div className="logoPhone logoPhone--animated">
        <span className='logoContainer'>
          <h1 className='logoContainer__PASS'>Pass</h1>
          <h1 className='logoContainer__Viajes'>Viajes</h1>
        </span>
        <span className='phoneContainer'>
          <p className='phoneContainer__text'>LLámenos al</p>
          <p className='phoneContainer__phoneNumber'>+5411 5750 1809</p>
        </span>
      </div>
    );
  }
}

export default LogoPhone;
