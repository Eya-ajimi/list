import React from 'react'
import {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux"
import { addcontact } from '../js/actions/ContactAction';
import {Link} from 'react-router-dom'
const Addcontact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const dispatch = useDispatch() 
    const add =()=>{
        dispatch (addcontact({name,email,tel}))
    }
    return (
        <div>
        <Form>
        <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
        value= {name}
        onChange={e=>setName(e.target.value)}
        />
       </FormGroup>
        <FormGroup>
        <Label for="examplePassword">Email</Label>
        <Input type="Email" name="Email" id="exampleEmail" placeholder="password placeholder" 
             value= {email}
             onChange={e=>setEmail(e.target.value)}/>
       </FormGroup>
       <FormGroup>
        <Label for="examplePassword">Tel</Label>
        <Input type="Email" name="Eamil" id="exampleEmail" placeholder="password placeholder"
             value= {tel}
             onChange={e=>setTel(e.target.value)} />
       </FormGroup>
      <Link to ="/contact list"> <Button color ="info" onClick={add}>Add</Button></Link>
       </Form>
        </div> 
    )
}

export default Addcontact;
