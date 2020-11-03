import React from "react";
import styled from "styled-components/macro";

const Image = styled.img`
  width: 100%;
`;

const BigLogo = () => {
  return (
    <Image
      src="https://richjames.co.uk/img/tullochlogo_small.png"
      alt="company logo"
    />
  );
};

export default BigLogo;
