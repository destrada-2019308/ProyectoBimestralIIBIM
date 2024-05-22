import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656',
    timeout: 1000
})
apiClient.interceptors.request.use(
    (config)=>{
        const userDetails = localStorage.getItem('token')
        if(userDetails){
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
           // console.log(token)
        }
        return config
    },
    (err)=> Promise.reject(err)
)

export const updateUser = async(user)=>{
    try {
        return await apiClient.put('/user/updateUser', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getUsersID = async()=>{
    try {
        return await apiClient.get('/user/getUsersID')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteUser = async(password)=>{
    try {
        return await apiClient.delete('/user/deleteUser', { data: { password } })
        
    } catch (error) {
        return {
            error: true,
            error
        }
    }
}