import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 13vh;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      Grupo #7 Steal Codes
      <br />
    Zaru Traveling S.A
      <br />
      Proyecto 2do Bimestre
      <br />
      Santiago González / Rodrigo Diaz / Sebastian Santos / Altan Cortez / Diego Estrada
    </FooterContainer>
  );
};