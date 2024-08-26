import React, { useState, useRef } from "react";
import "./App.css";
import Logo from "./assets/Logo.svg";
import { BsCart2, BsUnity } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SmallWideLogo2 from "./assets/Small-Wide-Logo-1.png";
import { Link, Element } from "react-scroll";
import HomeBannerLogo from "./assets/home-banner-background-blue_LOGO.png";
import AboutBackgroundBlue from "./assets/about-background-blue.png";
import LogoBlackTransparent from "./assets/Logo Black Transparent.png";
import HeadShot from "./assets/head-shot.jpg";
import { AiFillStar } from "react-icons/ai";
import BACPLogo from "./assets/BACP Logo - 388250 new.png";
import { FaChevronUp } from "react-icons/fa";
import CommerceHouse from "./assets/Commerce-House-1.png";
import emailjs from "@emailjs/browser";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuOptions = [
    {
      text: "Counselling",
      icon: <InfoIcon />,
      id: 1,
      offset: -100,
      duration: 500,
    },
    {
      text: "Supervision & Training",
      icon: <CommentRoundedIcon />,
      id: 2,
      offset: -300,
      duration: 500,
    },
    {
      text: "About",
      icon: <MenuBookIcon />,
      id: 3,
      offset: -20,
      duration: 500,
    },
    {
      text: "Contact Us",
      icon: <PhoneRoundedIcon />,
      id: 4,
      offset: 0,
      duration: 1000,
    },
  ];

  const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_nsmmk8d",
          "template_tf9rlag",
          form.current,
          "_LdYqIJsn_H12OJlA"
        )
        .then(
          () => {
            window.alert("message sent.");
          },
          (error) => {
            window.alert("message failed to send.", error.text);
          }
        );
    };

    return (
      <div className="contact-form">
        <h1 className="primary-heading">Have a Question in Mind?</h1>
        <Element name="contact-page-wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </Element>
      </div>
    );
  };

  return (
    <div className="content">
      <button onClick={top} className="back-to-top-button">
        <FaChevronUp size={30} />
      </button>
      <nav>
        <div className="nav-logo-container">
          <img src={SmallWideLogo2} alt="Logo" />
        </div>
        <ul className="navbar-links-container">
          {menuOptions.map((menu, index) => (
            <li key={index} className="navbar-links-container">
              <Link
                to={menu.text}
                smooth={true}
                offset={menu.offset}
                duration={menu.duration}
              >
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={HomeBannerLogo} alt="Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Penny Smith Counselling</h1>
          <p className="primary-text">
            I offer an integrative approach to therapy including: Person-Centred
            Counselling, Cognitive Behavioural Therapy (working on changing
            problematic thinking patterns and behaviours), Coaching/Goal Setting
            &amp; Personal Development, Trauma based Therapy Dialectical
            Behaviour Therapy and Inner Child work at my office in Uphill
            Lincoln, as well as over Zoom, WhatsApp and telephone. I work with
            teenagers and adults of any age and all genders (LGBTQ+) and I also
            have experience of Neurodiversity (ADHD and ASD). The frequency and
            number of therapy sessions is completely flexible and this can be
            reviewed at any time.
          </p>
        </div>
      </div>

      <Element name="Counselling" className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackgroundBlue} alt="About Background" />
        </div>
        <div className="about-section-image-container">
          {/* <img src={LogoBlackTransparent} alt="Logo" /> */}
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">Counselling</p>
          <h1 className="primary-heading">How I Can Help You</h1>
          <p className="primary-text-counselling">
            I can assist you with issues such as: Anxiety-Disorders (Generalised
            Anxiety, excessive worry, Social Anxiety, Phobias) Stress &amp;
            Stress Management, Low Mood, Grief &amp; Loss, Trauma, Self-esteem,
            Body Image, Disordered Eating, recovery from Narcissistic Abuse,
            Co-Dependency, Self-Harm, Interpersonal Relationships, Assertiveness
            and establishing healthy boundaries, Anger Management, Managing your
            Relationship with Alcohol (“Grey Area drinking, alcohol moderation
            and sobriety), managing emotions and emotional
            dysregulation/overwhelm, Improving social skills, sleep problems,
            menopause related issues.
          </p>
          <h1 className="primary-subheading">£45 per session (55 minutes)</h1>
          <h1 className="primary-heading">Location</h1>
          <img
            src={CommerceHouse}
            className="chamber-of-commerce"
            alt="Commerce House"
          />
          <p className="primary-text-chamber">
            Lincolnshire Chamber of Commerce Commerce House Carlton Boulevard
            Lincoln LN2 4WJ
          </p>
        </div>
      </Element>

      <Element name="Supervision & Training" className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Supervision & Training</p>
          <p className="primary-text">
            I am a qualified Clinical Supervisor and can provide evidence of my
            qualification for training providers and employers. Having been
            involved in training student counsellors on Level 4 Diploma and CBT
            courses, I am happy to provide supervision for trainee’s and newly
            qualified counsellors, as well as those more experienced. Group
            supervision as well as one-to-one supervision is also an option.
          </p>
          <p className="primary-subheading">
            CPD training for qualified counsellors
          </p>
          <p className="primary-text">
            At several points throughout the year I run a 2 day course in
            Dialectical Behaviour Therapy. DBT is an effective therapy for
            people struggling with emotional dysregulation and self-harm
            behaviour, suicide attempts, depression, anxiety, addictions,
            disordered eating, OCD, PTSD and BPD. Please contact me to express
            your interest and be added to the list for future dates.
          </p>
        </div>
      </Element>

      <Element name="About" className="work-section-wrapper">
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">Qualifications:</h1>
            <p className="primary-text">
              BSc (Hons) Psychology
              <br />
              <br /> Qualified Teacher Status (21 years’ experience of teaching
              GCSE and A Level Psychology in local secondary schools)
              <br />
              <br /> Level 5 Diploma in Counselling
              <br /> <br />
              Level 5 Diploma in Cognitive Behavioural Therapy (including
              Coaching)
              <br /> br Diploma in Clinical Supervision
              <br />
              <br />
              Accredited Rewind Therapy Practitioner with the International
              Association for Rewind Trauma
              <br />
              <br />
              Certificate in Safeguarding for Counsellors working with children
              &amp; young people
              <br />
              <br /> Enhanced DBS checked
            </p>
          </div>
          <div className="about-cards">
            <div className="testimonial-section-bottom">
              <img className="head-shot" src={HeadShot} alt="Headshot" />
              <div className="testimonial-content">
                <div className="testimonials-stars-container">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h2>Penny Smith</h2>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="Contact Us" className="contact-page-wrapper">
        <ContactUs />
      </Element>

      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="nav-logo-container">
            {/* <img src={SmallWideLogo2} alt="Logo" /> */}
          </div>
        </div>
        <div className="bacp-logo">
          <img src={BACPLogo} alt="BACP Logo" />
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>
              Lincolnshire Chamber of Commerce <br /> Commerce House <br />{" "}
              Carlton Boulevard
              <br /> Lincoln <br /> LN2 4WJ
            </span>
            <span>pennysmith690@btinternet.com</span>
            <span>07593275163</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
