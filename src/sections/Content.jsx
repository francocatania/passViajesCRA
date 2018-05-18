import React from 'react';
import LogoPhone from '../components/LogoPhone';
import Title from '../components/Title';
import PriceList from '../components/PriceList';

const Content = () => (
  <div className="content">
    <LogoPhone />
    <Title />
    <PriceList />
    {/* <Copyright /> */}
  </div>
);

export default Content;
