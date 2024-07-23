// import { useState } from 'react';
// import React from 'react'
// import { IoCall } from "react-icons/io5";
// import Button from '../Button';
// function Contact() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });
//   return (
//     <div>
//         <div className="fromchild">
//         <br></br>
//         <input
//           value={form.firstName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               firstName: e.target.value,
//             });
//           }}
//         />
//         <br></br>

//         <br></br>
//         <input
//           value={form.lastName}
//           onChange={(e) => {
//             setForm({ ...form, lastName: e.target.value });
//           }}
//         />
//         <br></br>

//         <br></br>
//         <input
//           value={form.email}
//           onChange={(e) => {
//             setForm({ ...form, email: e.target.value });
//           }}
//         />
//         <br></br>
//         <br></br>
//         {/* <p>
//         {form.firstName}{' '}
//         {form.lastName}{' '}
//         ({form.email})
//       </p> */}
//         <Button first={"submit"} />
//         <div className="local">
//           <IoCall /> <span>+923011458998</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact

import { useState } from 'react';
import React from 'react';
import { IoCall } from "react-icons/io5";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
          <div className="mt-4 d-flex align-items-center justify-content-center">
            <IoCall size={24} className="me-2" /> 
            <span>+923011458998</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
