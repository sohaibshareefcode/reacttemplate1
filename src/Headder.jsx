// // import React, { useEffect, useState } from "react";
// // import { NavLink, Link } from "react-router-dom";



// // function Headder() {

// //   const  [width , setWidth] = useState(0);

  
// //   useEffect(()=>{
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY; // Current vertical position of the scroll bar
// //       const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
// //       const scrollPercent = (scrollTop / docHeight) * 100; // Calculate scroll percentage
// //       setWidth(scrollPercent); // Update the width 
      
// //       console.log(window.screenY);

// //     };
// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   } , [])



// //   return (
// //     <nav className="navbar navbar-expand-lg p-3 text-white  text-light sticky-lg-top" id="nav">
// //       <div className="bg-light scroll" style={{width : width + "%"}}>

// //       </div>
// //       <div className="container-fluid " >
// //         {/* <Link to="/">NavBar</Link> */}
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarNav"
// //           aria-controls="navbarNav"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse" id="navbarNav">
// //           <ul className="navbar-nav">
// //             <li className="nav-item">
// //               <Link
// //                 className=" navbar-brand  text-white "
// //                 aria-current="page"
// //                 to="/"
// //               >
// //                 Home
// //               </Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="navbar-brand text-white " to="/about">
// //                 About
// //               </Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="navbar-brand text-white " to="/contact">
// //                 Contact us
// //               </Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="navbar-brand text-white " to="/gallery">
// //                 Gallery
// //               </Link>
// //             </li>
// //           </ul>
          
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Headder;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { SiApachenetbeanside } from "react-icons/si";
// function Headder() {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY; // Current vertical position of the scroll bar
//       const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
//       const scrollPercent = (scrollTop / docHeight) * 100; // Calculate scroll percentage
//       setWidth(scrollPercent); // Update the width 
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg p-3 text-white text-light sticky-top" id="nav">
//       <div className="bg-light scroll" style={{ width: width + "%", height: '5px', position: 'fixed', top: 0, left: 0, zIndex: 1 }}></div>
//       <div className="container-fluid">
//         <Link className="navbar-brand text-white" to="/"><SiApachenetbeanside className="iconi" /></Link>
//         <button
//           className="navbar-toggler ms-auto"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon "></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="navbar-brand text-white" aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="navbar-brand text-white" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="navbar-brand text-white" to="/contact">Contact us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="navbar-brand text-white" to="/gallery">Gallery</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Headder;







import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { SiApachenetbeanside } from "react-icons/si";

function Headder() {
  const [width, setWidth] = useState(0);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <nav className="navbar navbar-expand-lg p-3  sticky-top" id="nav">
      <div className="bg-dark scroll" style={{ width: width + "%", height: '5px', position: 'fixed', top: 0, left: 0, zIndex: 1 }}></div>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/"><SiApachenetbeanside className="iconi" /></Link>
        <button
          className={`navbar-toggler ms-auto ${isRotated ? 'rotate' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: 'white', transition: 'transform 0.3s ease' }}
          onClick={toggleRotation}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="navbar-brand text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand text-white" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand text-white" to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Headder;
