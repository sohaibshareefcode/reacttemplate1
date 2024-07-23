// import React from 'react'
// import { CgBox } from "react-icons/cg";
// import { CgAirplane } from "react-icons/cg";
// import { DiApple } from "react-icons/di";
// import { DiCodeigniter } from "react-icons/di";
// import Propschild from '../Propschild';
// function About() {
//   return (
//     <div>

// <div className="parentcard">
//         <h1>
//           at you service
//           <hr
//             style={{
//               width: "10%",
//               margin: "0 auto",
//               border: " 3px solid red",
//             }}
//           />
//         </h1>

//         <div className="maincard">
//           <div className="cardchild">
//             <CgAirplane className="icon" />
//             <Propschild
//               heading="Sturdy Themes"
//               name="Lorem ipsum dolor sit amet, consectetur voluptate earum, vel cupiditate"
//             />
//           </div>
//           <div className="cardchild">
//             <DiApple className="icon" />
//             <Propschild
//               heading="Sturdy Themes"
//               name="Lorem ipsum dolor sit amet, consectetur voluptate earum, vel cupiditate"
//             />
//           </div>
//           <div className="cardchild">
//             <CgBox className="icon" />

//             <Propschild
//               heading="Sturdy Themes"
//               name="Lorem ipsum dolor sit amet, consectetur voluptate"
//             />
//           </div>
//           <div className="cardchild">
//             <DiCodeigniter className="icon" />

//             <Propschild
//               heading="Sturdy Themes"
//               name="Lorem ipsum dolor sit amet, consectetur voluptate"
//             />
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default About


import React from 'react';
import { CgBox, CgAirplane } from 'react-icons/cg';
import { DiApple, DiCodeigniter } from 'react-icons/di';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Propschild from '../Propschild';

function About() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">
        At Your Service
        <hr
          style={{
            width: '10%',
            margin: '0 auto',
            border: '3px solid red',
          }}
        />
      </h1>
      <Row className="text-center">
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="d-flex flex-column align-items-center">
              <CgAirplane className="icon mb-3" size={40} />
              <Propschild
                heading="Sturdy Themes"
                name="Lorem ipsum dolor sit amet, consectetur voluptate earum, vel cupiditate"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="d-flex flex-column align-items-center">
              <DiApple className="icon mb-3" size={40} />
              <Propschild
                heading="Sturdy Themes"
                name="Lorem ipsum dolor sit amet, consectetur voluptate earum, vel cupiditate"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="d-flex flex-column align-items-center">
              <CgBox className="icon mb-3" size={40} />
              <Propschild
                heading="Sturdy Themes"
                name="Lorem ipsum dolor sit amet, consectetur voluptate"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="d-flex flex-column align-items-center">
              <DiCodeigniter className="icon mb-3" size={40} />
              <Propschild
                heading="Sturdy Themes"
                name="Lorem ipsum dolor sit amet, consectetur voluptate"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
