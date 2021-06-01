import React from "react"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useDispatch } from "react-redux"
import { deletecontact } from "../js/actions/ContactAction";
import Editcontact from "./Editcontact";

const Contactcard =({contact})=>{
const dispatch = useDispatch()
const delet =()=>{
    dispatch(deletecontact(contact._id))
}
    return(
        <div style={{minWidth:"400px",margin:"20px"}}>
             <Card body>
          <CardTitle tag="h5">{contact.name}</CardTitle>
          <CardText>{contact.email}</CardText>
          <CardTitle >{contact.tel} </CardTitle>
          <div style={{display:"flex",justifyContent:"space-around"}} >
          <Button  color="danger"  onClick={delet} >delete</Button>
           <Editcontact contact ={contact}/>
          </div>
        </Card>
        </div> 
    )
}
export default Contactcard;