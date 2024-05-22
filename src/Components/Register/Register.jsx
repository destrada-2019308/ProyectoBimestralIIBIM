import { useState } from "react"
import { Input } from "./Input.jsx"
import {
  validateEmail,
  validatePassConfirm,
  validatePassword,
  validateUsername,
  validateNameUser,
  validateSurName,
  validatePhone,
  nameUserValidationMessage,
  surnameValidationMessage,
  usernameValidationMessage,
  passwordValidationMessage,
  passConfirmValidationMessage, emailValidationMessage,
  phoneValidationMessage
} from '../../shared/validators/validator.js'
import { useRegister } from '../../shared/hooks/useRegister.jsx'

import './register.css'
import axios from "axios"

export const Register = ({ switchAuthAndler }) => {
  
  const [image, setImage] = useState()

  const { register, isLoading } = useRegister();

  const [formData, setFormData] = useState(
    {
      nameUser: {
        value: '',
        isValid: false,
        showError: false
      },
      surname: {
        value: '',
        isValid: false,
        showError: false
      },
      username: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      },
      passwordConfirm: {
        value: '',
        isValid: false,
        showError: false
      },
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      phone: {
        value: '',
        isValid: false,
        showError: false
      },
      imagesUser: {
        value: '',
        isValid: false,
        showError: false
      }
    }
  )

  const isSubmitButtonDisable = !formData.nameUser.isValid ||
    !formData.surname.isValid ||
    !formData.username.isValid ||
    !formData.password.isValid ||
    !formData.passwordConfirm.isValid ||
    !formData.email.isValid ||
    !formData.phone.isValid;

  const handleValueChange = (value, field) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          value
        }
      }
    ))
  }

  const handleValidateOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case 'nameUser':
        isValid = validateNameUser(value);
        break;
      case 'surname':
        isValid = validateSurName(value);
        break;
      case 'username':
        isValid = validateUsername(value);
        break;
      case 'password':
        isValid = validatePassword(value)
        break;
      case 'passwordConfirm':
        isValid = validatePassConfirm(formData.password.value, value)
        break;
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'phone':
        isValid = validatePhone(value)
        break;
      default:
        break;
    }
    setFormData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          isValid,
          showError: !isValid
        }
      }
    ))
  }
  
  const onChangeImage = (e) =>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0])
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    register(
      formData.nameUser.value,
      formData.surname.value,
      formData.username.value,
      formData.password.value,
      formData.email.value,
      formData.phone.value,
      formData.imagesUser.value
    )
  }
  return (
    <div className='ht-container'>
      <form action="" className="register-form" onSubmit={handleRegister}>
      <h1 className="">Registro</h1>
        <Input
          field='nameUser'
          label='Name'
          placeholder={'asd'}
          value={formData.nameUser.value}
          onChangeHandler={handleValueChange}
          type='text'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.nameUser.showError}
          validationMessage={nameUserValidationMessage}
        />
        <Input
          field='surname'
          label='Surname'
          value={formData.surname.value}
          onChangeHandler={handleValueChange}
          type='text'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.surname.showError}
          validationMessage={surnameValidationMessage}
        />
        <Input
          field='username'
          label='Username'
          value={formData.username.value}
          onChangeHandler={handleValueChange}
          type='text'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.username.showError}
          validationMessage={usernameValidationMessage}
        />
        <Input
          field='password'
          label='Password'
          value={formData.password.value}
          onChangeHandler={handleValueChange}
          type='password'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <Input
          field='passwordConfirm'
          label='Password Confirm'
          value={formData.passwordConfirm.value}
          onChangeHandler={handleValueChange}
          type='password'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.passwordConfirm.showError}
          validationMessage={passConfirmValidationMessage}
        />
        <Input
          field='email'
          label='Email'
          value={formData.email.value}
          onChangeHandler={handleValueChange}
          type='email'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field='phone'
          label='Phone'
          value={formData.phone.value}
          onChangeHandler={handleValueChange}
          type='tel'
          onBlurHandler={handleValidateOnBlur}
          showErrorMessage={formData.phone.showError}
          validationMessage={phoneValidationMessage}
        />
        <Input
            field='imagesUser'
            label='Imagen URL'
            value={formData.imagesUser.value}
            onChangeHandler={handleValueChange}
            type='text'
            onBlurHandler={handleValidateOnBlur}
            showErrorMessage={formData.imagesUser.showError}
          //validationMessage={phoneValidationMessage}
          />

        {/*<div className='imgUser'> 
        //</div>*/} 
        <button disabled={isSubmitButtonDisable}>Register</button>
        <span className='ht-span' onClick={switchAuthAndler}>
        ¿Ya tienes una cuenta? ¡Inicia sesión acá!
      </span>
      
      </form>
    </div>
  )
}

