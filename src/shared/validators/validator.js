export const validateNameUser = (nameUser) =>{
    return (nameUser)
}

export const validateSurName = (surname) =>{
    return (surname)
}

export const validatePhone = (phone) =>{
    const regex = /^\d{8}$/
    return regex.test(phone)
}


/*--------------------- VALIDACIÓN DE CORREO ---------------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/*--------------------- VALIDACIÓN DE CORREO ---------------------------- */

/*--------------------- VALIDACIÓN DE NOMBRE DE USUARIO ---------------------------- */
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}
/*--------------------- VALIDACIÓN DE NOMBRE DE USUARIO ---------------------------- */

/*--------------------- VALIDACIÓN DE CONTRASEÑA ---------------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/
    return regex.test(password)
}
/*--------------------- VALIDACIÓN DE CONTRASEÑA ---------------------------- */

/*--------------------- VALIDACIÓN DE CONTRASEÑA ---------------------------- */
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}
/*--------------------- VALIDACIÓN DE CONTRASEÑA ---------------------------- */

/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */
export const validateTitle = (title)=>{
    return title.length >=3 && title.length <= 30
}
/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */

/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */
export const validateAvatarUrl = (url)=>{
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url)

}
/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */

/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */
export const validateDescription = (title)=>{
    return title.length >= 10 && title.length <= 200
}
/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */

/* --------------------- MENSAJES DE VALIDACIÓN DE CAMPOS ------------------------------ */
export const usernameValidationMessage = 'El nombre de usuario debe ser de entre 3 y 8 caracteres, sin espacios.'
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 12 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const titleValidationMessage = 'El titulo debe tener entre 3 y 30 caracteres.'
export const avatarValidationMessage = 'La URL no tiene un formato válido'
export const descriptionValidationMessage = 'La descripción debe tener entre 10 y 200 caracteres.'
export const nameUserValidationMessage = 'El nombre no puede tener algun caracter especial'
export const surnameValidationMessage = 'El nombre no puede tener algun caracter especial'
export const phoneValidationMessage = 'Debe ingresar solo numeros'
/* --------------------- MENSAJES DE VALIDACIÓN DE CAMPOS ------------------------------ */