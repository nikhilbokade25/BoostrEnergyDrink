import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

import berryIcon from "../Assets/berryIcon.png";
import grapeIcon from "../Assets/grapeIcon.png";
import orangeIcon from "../Assets/orangeIcon.png";
import pineappleIcon from "../Assets/pineappleIcon.png";
import raspberryIcon from "../Assets/raspberryIcon.png";
import strawberryIcon from "../Assets/strawberryIcon.png";

import strawberryCan from "../Assets/StrawberryCan.png";

gsap.registerPlugin(ScrollTrigger);

const flavors = [
    { name: "ORANGE POP", icon: orangeIcon },
    { name: "RASPBERRY RUSH", icon: raspberryIcon },
    { name: "STRAWBERRY SPARK", icon: strawberryIcon },
    { name: "BERRY BLAST", icon: berryIcon },
    { name: "GRAPES GLOW", icon: grapeIcon },
    { name: "PINE ZING", icon: pineappleIcon },
];

export default function About() {
    const textRef = useRef();

    useEffect(() => {
        gsap.to(textRef.current, {
            xPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.to(".about_text", {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".about_content",
                start: "top 40%",
                end: "bottom bottom",
                toggleActions: "play none none none",
                scrub: true
            },
        });
        
        gsap.to(".about_image", {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".about_content",
                start: "top 40%",
                end: "bottom bottom",
                toggleActions: "play none none none",
                scrub: true
            },
        });
        

        

    }, []);

    return (
        <div className="about_container">
            <div className="products_text">
                <div className="scrolling_text" ref={textRef}>
                    {[...Array(2)].map((_, i) => (
                        <div className="flavor_row" key={i}>
                            {flavors.map((flavor, idx) => (
                                <span className="flavor_item" key={`${i}-${idx}`}>
                                    <img src={flavor.icon} alt={flavor.name} className="flavor_icon" />
                                    {flavor.name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='about_content'>
            <div className="about_inner">
        <div className="about_text">
            <h2 className='about_heading'>Well, what's not in the can?</h2>
            <p>No added sugars, no sweeteners.</p>
            <p>No colourants, no preservatives, no concentrates.</p>
            <p>No artificial aftertaste.</p>
            <p>No compromises, no shortcuts.</p>
        </div>
        <div className="about_image">
            <img src={strawberryCan} alt="Strawberry Can" />
        </div>
    </div>
            </div>
        </div>
    );
}
