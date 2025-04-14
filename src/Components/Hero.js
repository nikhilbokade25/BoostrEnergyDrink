import './Hero.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BerryCanImg from "../Assets/BerryCan.png";

export default function Hero(){

    const textRef = useRef();
    const imgRef = useRef();

    // useEffect(() => {
    //   gsap.fromTo(
    //     textRef.current,
    //     { scale: 0 },
    //     {
    //       scale: 1,
    //       duration: 3.2,
    //       ease: "elastic.out(1, 0.4)"
    //     }
    //   );
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(
    //       textRef.current,
    //       { scale: 0 },
    //       {
    //         scale: 1,
    //         duration: 3.2,
    //         ease: "elastic.out(1, 0.4)",
    //         onComplete: () => {
    //           gsap.fromTo(
    //             imgRef.current,
    //             { y: 100, opacity: 0, rotate: -30 },
    //             {
    //               y: 0,
    //               opacity: 1,
    //               rotate: -15,
    //               duration: 0.7,
    //               ease: "back.out(1.7)"
    //             },
    //           );
    //         }
    //       }
    //     );
    //   }, []);


    useEffect(() => {
        const tl = gsap.timeline();
    
        // Text animation (3.2s)
        tl.fromTo(
          textRef.current,
          { scale: 0 },
          {
            scale: 1,
            duration: 3.2,
            ease: "elastic.out(1, 0.4)"
          }
        );
    
        // Image animation
        tl.fromTo(
          imgRef.current,
          { y: 100, opacity: 0, rotate: -30 },
          {
            y: 0,
            opacity: 1,
            rotate: -15,
            duration: 1.2,
            ease: "back.out(1.3)"
          },
          "-=1.5" 
        );
      }, []);

    return(
        <div className="hero_container">
            <div className='hero_text'>
                <h2 ref={textRef}>BOOSTR</h2>
                <img ref={imgRef} src={BerryCanImg} alt="Berry Can" className="berry_can" />
            </div>
        </div>
    );
}