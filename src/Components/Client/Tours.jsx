import React, { useState } from 'react';
import styled from 'styled-components';
import banner1 from "../../assets/img/Banner1.jpg";
import banner2 from "../../assets/img/Banner2.jpg";
import banner3 from "../../assets/img/Banner3.jpg"; 

const BannerContainer = styled.div`
  position: absolute;
  top: 5vh;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 80%; 
`;

const Banner = styled.div`
  width: 100%;
  height: 22vh;
  background-image: url(${props => props.banner}); /* Utiliza la imagen asignada al banner */
  background-size: cover; /* Para cubrir todo el tamaño del banner */
  background-position: center; /* Centrar la imagen */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Footer = styled.div`
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

export const Tours = () => {
  const [selectedBanner, setSelectedBanner] = useState(1); // Inicializa el estado con el primer banner

  const handleBannerClick = banner => {
    if (selectedBanner === banner) {
      setSelectedBanner(null);
    } else {
      setSelectedBanner(banner);
    }
  };

  return (
    <>
      <BannerContainer>
        <Banner banner={banner1} onClick={() => handleBannerClick(1)}>
          {/* No se necesita texto dentro del banner */}
        </Banner>
        <InfoContainer isOpen={selectedBanner === 1}>
          Sumérgete en la rica cultura y la belleza natural que ofrece este increíble país. Desde las majestuosas ruinas mayas en Tikal hasta los coloridos mercados de Chichicastenango, cada rincón de Guatemala está impregnado de historia y encanto.
          <br />
          <br />
          Explora los paisajes montañosos de la región de Quetzaltenango, con sus volcanes imponentes y lagos serenos, o aventúrate en la selva tropical de Petén para descubrir la biodiversidad única de la región.
          <br />
          Déjate cautivar por la calidez y la hospitalidad de su gente, y prueba la deliciosa gastronomía guatemalteca, desde el famoso café hasta los sabrosos platillos tradicionales como el pepián y los tamales.

          Ya sea que busques aventuras al aire libre, cultura e historia fascinantes o simplemente relajarte en playas paradisíacas, Guatemala tiene algo para todos los gustos.
        </InfoContainer>
        <Banner banner={banner2} onClick={() => handleBannerClick(2)}></Banner>
        <InfoContainer isOpen={selectedBanner === 2}>
          Desde las cumbres de sus volcanes hasta las profundidades de sus exuberantes valles, Guatemala ofrece panoramas impresionantes que te dejarán sin aliento.
          <br />
          <br />
          Contempla el amanecer desde la cima del Volcán Acatenango, donde podrás admirar el resplandor del Volcán de Fuego iluminando el cielo con sus erupciones periódicas. O sumérgete en la serenidad del Lago de Atitlán, rodeado por imponentes montañas y pintorescos pueblos mayas.
          <br />
          Explora las antiguas ciudades mayas de Tikal y Yaxhá, donde las majestuosas pirámides emergen entre la densa vegetación, ofreciendo vistas impresionantes de la grandeza de la civilización antigua.
        </InfoContainer>
        <Banner banner={banner3} onClick={() => handleBannerClick(3)}></Banner>
        <InfoContainer isOpen={selectedBanner === 3}>
          Sumérgete en la belleza natural de Guatemala al explorar sus impresionantes nacimientos de agua, donde la pureza y la frescura del líquido elemento se encuentran en su estado más prístino.
          <br />
          <br />
          Embárcate en una aventura hacia las cascadas de Semuc Champey, un tesoro escondido en la selva guatemalteca. Disfruta del espectáculo de aguas cristalinas que serpentean entre pozas naturales de color turquesa, creando un paisaje surrealista que te dejará sin aliento.

          Déjate llevar por la magia de las Lagunas de Monterrico, donde la serenidad del agua se fusiona con la tranquilidad de la costa del Pacífico. Observa cómo las olas rompen suavemente en la orilla mientras contemplas la puesta de sol sobre el horizonte, creando un ambiente de paz y armonía.
        </InfoContainer>
      </BannerContainer>
      <Footer>
        Grupo #7 Steal Codes
        <br />
        Santiago Gonzalez / Rodrigo Diaz / Sebastian Santos / Altan Cortez / Diego Estrada
      </Footer>
    </>
  );
};
