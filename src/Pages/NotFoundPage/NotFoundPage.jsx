import React from 'react';
import icono from "../../assets/error404.json";
import styled from "styled-components";
import Lottie from 'react-lottie';

export const NotFoundPage = () => {
  console.log('Contenido del archivo JSON:', icono);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: icono,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Styled404>
      <div className='centrar'>
        <Lottie options={defaultOptions} />
        <div >
          <h1>NOT FOUND</h1>
          <p className="text-container">Revisar bien la URL</p>
        </div>
      </div>
    </Styled404>
  );
};

export const Styled404 = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  .text-container {
    background-color: #ffffff; 
    padding: 10px; 
    border-radius: 8px; 
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: px;
  }

  p {
    color: #12192C;
    font-weight: bold;
  }
`;