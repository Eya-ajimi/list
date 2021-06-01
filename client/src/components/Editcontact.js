
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input } from 'reactstrap';
import { editcontact } from '../js/actions/ContactAction';
import { useDispatch } from "react-redux"
const Editcontact = ({contact}) => {
 

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [tel, setTel] = useState(contact.tel);
 
  const toggle = () => {
    setModal(!modal)
    setEmail(contact.email)
    setTel(contact.tel)
    setName(contact.name)
  };
  const dispatch = useDispatch()
  const editt=()=>{
    dispatch(editcontact(contact._id,{name,email,tel}))
    toggle()
  }
  return (
      
    <div>
      <Button color="danger" onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
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
       </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>Edit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Editcontact;