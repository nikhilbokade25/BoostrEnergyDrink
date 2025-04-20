import './Footer.css';

export default function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_top">
                <div className="footer_left">
                    <p>
                        Savor the crisp, natural flavor of <strong>Boostr</strong> – no junk, no fake stuff, just clean energy in a can that gives back to the planet.
                    </p>
                </div>

                <div className="footer_right">
                    <p>
                        <strong>Fuel up, guilt-free.</strong>
                    </p>
                </div>
            </div>

            <hr className="footer_hr" />

            <div className="footer_bottom">
                <p>Privacy Terms &nbsp;|&nbsp; FAQ &nbsp;|&nbsp; Contact &nbsp;|&nbsp; Socials</p>
            </div>
        </div>
    );
}
