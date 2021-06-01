import React from "react"
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"

import { getcontacts } from "../js/actions/ContactAction"
import Contactcard from "./Contactcard"
const Contactlist =()=>{
 const dispatch = useDispatch()
 useEffect(()=>{
 dispatch(getcontacts())
 },[])
 const contacts = useSelector( state=>state.contacts)

    return (
        <div style ={{display:"flex", flexWrap:"wrap"}}>
            {
                contacts.map(contact=> <Contactcard key= {contact._id}  contact={contact}/> )
            }
      
        </div>
    )
}
export default Contactlist