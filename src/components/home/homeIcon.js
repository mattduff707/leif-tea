import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HomeIcon = () => {
  return (
    <>
      <StaticImage src="../../images/logoLong.png" alt="Leif" placeholder="tracedSVG" layout="constrained" />
    </>
  );
};

export default HomeIcon;
