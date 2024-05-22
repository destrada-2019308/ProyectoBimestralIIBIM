import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLogin } from "../../shared/hooks/UseLogin.jsx";

//importe de iconos
import loginIcon from '../../assets/img/logo-image.svg'
import { BoxIcon } from 'boxicons'
import PropTypes from "prop-types"

export const Login = ({ switchAuthAndler }) => {
  
  // ///////////////////////////////////// //
  /*        Codigo para validar datos      */
  // ///////////////////////////////////// //
  const { login, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  });

  // Boton para validar la información
  const isSubmitButtonDisable = !formData.email.isValid || !formData.password.isValid;
  
  //No hare un OnBlur (el que cuando te sale marca error) por estetica
  
 
  
  //Este pedira los datos
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e)
    if (formData.email.isValid && formData.password.isValid) {
      login(formData.email.value, formData.password.value);
    }
    setFormData({
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      }
    })
    
  };
  
  
  
  // ///////////////////////////////////// //
  /* Codigo de la animación de los inputs */
  // ///////////////////////////////////// //
  useEffect(() => {
    //Se importa la clase de input
    const inputs = document.querySelectorAll(".form__input");
    //Se agrega la animación para que suba
    function addFocus() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }
    //Funcion para que baje
    function removeFocus() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addFocus);
      input.addEventListener("blur", removeFocus);

      return () => {
        input.removeEventListener("focus", addFocus);
        input.removeEventListener("blur", removeFocus);
      };
    });
  });

  const handleChange = (e)=>{
    console.log(e.target) //este es importante para ver los valores introducidos y compararlos
    setFormData((prevData)=> (
      {
        ...prevData,
        [e.target.name]: {
          ...prevData[e.target.name],
          value: e.target.value,
          isValid: true
        }
      }
    ))
    //console.log(formData); //este almacena los datos (propiedad de react)
  }
  
  /* /////////////// */
  /* Este es el JSX*/
  /* /////////////// */
  return (
    
    <StyledLogin>
      <div className="l-form">
        
        <div className="form">
          <div className="form__img-container">
            <img src={loginIcon} alt="" className="form__img" />
          </div>
          <div className="form__content-container">
            <form onSubmit={handleLogin} className="form__content">
              <h1 className="form__title">Welcome to Zaru Travelling</h1>

              <div className="form__div form__div-one">
                <div className="form__icon">
                  <box-icon type='solid' name='user-circle'></box-icon>
                </div>
                <div className="form__div-input">
                  <label htmlFor="" className="form__label">Email</label>
                  <input value={formData.email.value} onChange={handleChange} name='email' type="text" className="form__input" />
                </div>
              </div>

              <div className="form__div">
                <div className="form__icon">
                  <box-icon type='solid' name='lock-open'></box-icon>
                </div>
                <div className="form__div-input">
                  <label htmlFor="" className="form__label">Password</label>
                  <input value={formData.password.value} onChange={handleChange} name='password' type="password" className="form__input" />
                </div>
              </div>
              
              <button className='form__button' disabled={isSubmitButtonDisable}>Login</button>
              <span id='account' onClick={switchAuthAndler}>
                ¿No tienes cuenta? Crea una aca
              </span>
            </form>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  /* Propiedades para el responsive en teléfono */
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;

  /* Estilos para textos y enlaces */
  h1 {
    color: white;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  /* Formulario en general */
  .form {
    width: 90vw;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1; /* Asegura que el formulario esté encima de las formas */
  }

  .form__img-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .form__img {
    max-width: 100%;
    height: auto;
    max-height: 300px;
  }

  .form__content-container {
    width: 100%;
    max-width: 400px;
    position: relative; /* Asegura que las formas sean relativas a este contenedor */
    z-index: 2; /* Asegura que el contenido esté encima de las formas */
  }

  .form__content {
    width: 100%;
  }

  .form__title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333333;
    text-align: center;
  }

  .form__div {
    width: 100%;
    margin-bottom: 15px;
  }

  .form__icon {
    display: inline-block;
    margin-right: 10px;
    font-size: 20px;
    color: #888888;
  }

  .form__label {
    font-size: 16px;
    color: #333333;
    margin-bottom: 5px;
    display: block;
  }

  .form__input {
    width: calc(100% - 30px);
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #dddddd;
    border-radius: 25px; /* Rounded corners */
    outline: none;
    background-color: #dfdfdf; /* Light blue background */
    transition: border-color 0.3s, background-color 0.3s;
    color: #000000;
  }

  .form__input:focus {
    border-color: #007bff; /* Blue border on focus */
    background-color: #b3e5fc; /* Slightly darker blue when focused */
  }

  .form__forgot {
    font-size: 14px;
    color: #888888;
    margin-bottom: 15px;
    text-align: right;
  }

  #account {
    font-size: 14px;
    color: #888888;
    text-align: center;
    cursor: pointer;
  }

  .form__button {
    width: calc(100% - 30px);
    padding: 12px 0;
    font-size: 18px;
    border: none;
    border-radius: 25px; /* Rounded corners for button */
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
  }

  .form__button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;