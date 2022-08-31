import axios  from "../axios";

const   handleLoginApi = (userEmail, userPassword) =>{
   return axios.post('/api/login', {email: userEmail, password: userPassword});
}
const getAllUsers = (inputId) =>{
   return axios.get(`/api/get-all-users?id=${inputId}`)

}

const createNewUserService = (data) => {
   return axios.post('/api/create-new-users', data)
}

const deleteUserService = (userId) =>{
   // return axios.delete('/api/delete-users', {id : userID})

   return axios.delete('/api/delete-users',{
      data: {
         id: userId
      }
   })

}
export {handleLoginApi, getAllUsers, createNewUserService, deleteUserService}

