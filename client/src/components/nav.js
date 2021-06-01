import React from "react"
import { Button } from 'reactstrap';
import {Link } from 'react-router-dom'
const Nav=()=>{
    return(
        <div>
        <Link to ="/"> <Button color="primary">Home</Button></Link>
        <Link to ="/contact list"> <Button color="secondary"> contact list</Button></Link>
        <Link to ="/addcontact"> <Button color="success">add contact</Button> </Link>
        </div>
    )
} 
export default Nav ;