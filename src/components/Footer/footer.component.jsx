import React from "react";
import { FaYoutube} from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';
import { useStyles } from './footer.style';

const Footer = () => {


    const classes = useStyles();
    return (
        <>
            <div className={classes.black} style={{ marginTop: "100px" }}>
                <div className={classes.column3}>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <h4 className={classes.about}><b>QUICK LINKS</b></h4>
                            <p><a className={classes.content} href="/">ABOUT US</a></p>
                            <p><a className={classes.content} href="/">TEAM</a></p>
                            <p><a className={classes.content} href="/">NEWS AND UPDATES</a></p>
                        </div>
                        <div className={classes.column}>
                            <h4 className={classes.about}><b>CONTACTS</b></h4>
                            <p><a className={classes.content} href="/">CAPTAIN</a></p>
                            <p><a className={classes.content} href="/">VICE-CAPTAIN</a></p>
                        </div>
                        <div className={classes.column}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.686377064732!2d86.14192731491465!3d22.777017385077915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1624702940524!5m2!1sen!2sin" title="map" className={classes.frame} width="700" height="250" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.row1}>
                        <p className={classes.left}>Follow us on social media to get the latest updates</p>
                        <a href="https://www.youtube.com/channel/UCNrC_ukYhFvk5yEDrGmp9eA" className={classes.you}><FaYoutube size={30} /></a>
                        <a href="https://www.facebook.com/teamraysnitjsr" className={classes.fb}><FaFacebookSquare size={30} /></a>
                        <a href="https://www.instagram.com/team_rays/" className={classes.insta}><FiInstagram size={30} /></a>
                        <a href="https://www.linkedin.com/company/team-rays/" className={classes.in}><ImLinkedin size={30} /></a>
                    </div>

                    <hr style={{ marginTop: "50px" }}></hr>
                </div>
                <div className={classes.last}>&copy;2021 Team Rays NIT JAMSHEDPUR</div>
            </div>
        </>
    );
}

export default Footer;