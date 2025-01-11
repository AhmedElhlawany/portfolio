// import React from "react";
// import { useState, useEffect } from "react";
// import headerImg from "../../Public/header-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// const Contact = () => {
//     const [loopNum, setLoopNum] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [text, setText] = useState('');
//     const [delta, setDelta] = useState(300 - Math.random() * 100);
//     const [index, setIndex] = useState(1);
//     const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
//     const period = 2000;
  
//     useEffect(() => {
//       let ticker = setInterval(() => {
//         tick();
//       }, delta);
  
//       return () => { clearInterval(ticker) };
//     }, [text])
  
//     const tick = () => {
//       let i = loopNum % toRotate.length;
//       let fullText = toRotate[i];
//       let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
//       setText(updatedText);
  
//       if (isDeleting) {
//         setDelta(prevDelta => prevDelta / 2);
//       }
  
//       if (!isDeleting && updatedText === fullText) {
//         setIsDeleting(true);
//         setIndex(prevIndex => prevIndex - 1);
//         setDelta(period);
//       } else if (isDeleting && updatedText === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setIndex(1);
//         setDelta(500);
//       } else {
//         setIndex(prevIndex => prevIndex + 1);
//       }
//     }
//   return (

//     <>
    
//     <div className=" w-full h-full flex justify-center items-center ">
//       <div className="bg-opacity-5 w-[380px] mt-16 p-4 backdrop-blur bg-white  text-white rounded-lg shadow-lg z-[20]">
//         <h2 className="text-3xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
//           Contact Me
//         </h2>
//         <p className="text-gray-300 mb-4 text-center">
//           Please fill out the form below to get in touch with me.
//         </p>
//         <form className="flex flex-col gap-5">
//           <input
//             className="border border-purple-500 text-white font-bold py-2 px-4 rounded-xl"
//             type="text"
//             placeholder="Your Name"
//           />
//           <input
//             className="border border-purple-500 text-white font-bold py-2 px-4 rounded-xl"
//             type="email"
//             placeholder="Your Email"
//           />
//           <input
//             className="border border-purple-500 text-white font-bold py-2 px-4 rounded-xl"
//             type="text"
//             placeholder="Your Message"
//           />

//           <button
//             className=" hover:animate-pulse  text-white font-bold py-2 px-4 rounded-xl button-primary"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>




//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Welcome to my Portfolio</span>
//                 <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
//                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                   <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={headerImg} alt="Header Img"/>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
    
//     </>
    



//   );
// };

// export default Contact;