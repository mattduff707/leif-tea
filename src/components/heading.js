import React from 'react';
import styled from 'styled-components';

const Heading = ({ tag, children, className }) => {
  return (
    <StyledHeading className={className} as={tag}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h2``;

export default Heading;
