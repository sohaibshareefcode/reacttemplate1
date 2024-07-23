// import React from 'react'
// import img from "../assets/images/01-bg.jpg"
// import Cardhover from '../Cardhover';
// function Gallery() {
//   return (
//    <div>
//     <div className="cardimage">
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>

//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//       </div>
//    </div>
//   )
// }

// export default Gallery








import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../assets/images/01-bg.jpg";

function Gallery() {
  return (
    <Container fluid className="p-0">
      <Row className="g-4 mx-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="position-relative p-0">
            <Card className="border-0 imagechild">
              <Card.Img variant="top" src={img} className="card-img" />
              <div className="overlay">
                <h4>CateGory</h4>
                <p>Project Name</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
