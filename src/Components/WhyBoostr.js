import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyBoostr.css';

import recycleCan from "../Assets/recycleCan.png";
import organicIcon from "../Assets/organicIcon.png";
import lightningIcon from "../Assets/lightningCursor.png";

gsap.registerPlugin(ScrollTrigger);

export default function WhyBoostr() {
    const containerRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const description = descRef.current;
        const container = containerRef.current;

        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            const scrollDistance = description.scrollHeight - container.offsetHeight;

            ScrollTrigger.create({
                trigger: container,
                start: 'top top',
                end: `+=${scrollDistance}`,
                scrub: true,
                pin: container,
                anticipatePin: 1,
                onUpdate: self => {
                    gsap.to(description, {
                        y: -scrollDistance * self.progress,
                        ease: 'none',
                        overwrite: 'auto'
                    });
                }
            });
        } else {
            // Remove transform for mobile so it doesn't keep the div stuck
            gsap.set(description, { clearProps: "all" });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="boostr_wrapper">
            <div className="boostr_container" ref={containerRef}>
                <div className="boostr_content">
                    <div className="boostr_image">
                        <h2>WHY BOOSTR?</h2>
                    </div>
                    <div className="boostr_description">
                        <div className="boostr_inner" ref={descRef}>
                            <div className="boostr_division">
                                <div className="boostr_heading">
                                    <h1>01</h1>
                                    <img src={recycleCan} alt="Recycling Can" />
                                </div>
                                <h2 className="boostr_title">Sip. Recycle. Repeat.</h2>
                                <p>Every Boostr can is 100% recyclable.</p>
                                <p>We keep it clean, inside and out. No waste, no guilt.</p>
                                <p>Do your part without lifting more than a finger.</p>
                                <p>Small step for you, giant leap for a cleaner planet.</p>
                            </div>

                            <div className="boostr_division">
                                <div className="boostr_heading">
                                    <h1>02</h1>
                                    <img src={organicIcon} alt="Organic" />
                                </div>
                                <h2 className="boostr_title">Fuel from Nature</h2>
                                <p>Boostr is powered by natural and clean ingredients.</p>
                                <p>No synthetics, no shady stuff.</p>
                                <p>From plant to can, we keep it real.</p>
                            </div>

                            <div className="boostr_division">
                                <div className="boostr_heading">
                                    <h1>03</h1>
                                    <img src={lightningIcon} alt="Energy" />
                                </div>
                                <h2 className="boostr_title">Stay locked in</h2>
                                <p>Boostr isn’t just energy — it’s clarity in a can.</p>
                                <p>No jitters, no crash. Just smooth, sustained focus.</p>
                                <p>Early or late, you're locked in.</p>
                                <p>Your goals called. They want you at 100%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
