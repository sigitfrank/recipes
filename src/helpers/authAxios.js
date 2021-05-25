import axios from "axios"
const authAxios = (accessToken)=>{
   return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
          }
      })
    
} 
  export default authAxios