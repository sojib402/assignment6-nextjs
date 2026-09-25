import React from 'react';
import Banner from './components/homepage/Banner';
// import Fits from './components/homepage/Fits';
import Fits from './Fits/page';
const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Fits/>
    </div>
  );
};

export default page;