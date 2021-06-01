import axios from "axios"
import {GET_CONTACTS} from "../constants/Contactconst"
//get 
export const getcontacts=()=>dispatch=>{
    axios.get ("http://localhost:7000/api/contacts/")
    .then(res=>  dispatch({type:GET_CONTACTS,payload:res.data }) )
    .catch(err=>console.log(err))
    }



//post 
export const addcontact=(newcontact)=>dispatch=>{
    axios.post("http://localhost:7000/api/contacts/addcontact",newcontact)
    .then(res=> dispatch(getcontacts())  ) 
    .catch(err=>console.log(err))
}
//delete
export const deletecontact=(idcontact)=>dispatch=>{
    axios.delete(`http://localhost:7000/api/contacts/${idcontact}`)
    .then (res=> dispatch(getcontacts()) )
    .catch(err=>console.log(err))
}


//put
export const editcontact=(idcontact,contactedit)=>dispatch=>{
    axios.put(`http://localhost:7000/api/contacts/${idcontact}`,contactedit)
    .then (res=> dispatch(getcontacts()) )
    .catch(err=>console.log(err))
} 