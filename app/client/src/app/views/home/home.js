import React, { useEffect } from "react";
import "./home.scss";

import Fade from "react-reveal/Fade";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { faqQuestions } from "assets/data/faq-questions";
import { FAQCollapse } from "app/containers";
import { Fireflies } from "app/components";
import { useWindowSize } from "app/hooks";
import CurrentSponsors from "./current-sponsors/currentSponsors";
import CurrentPartners from "./current-partners/currentPartners";
import hackathon from "assets/images/site/hackathon.jpg";
import antMentor from "assets/images/site/ant_mentor_grey_blue.png";
import antSponsor from "assets/images/site/ant_sponsor_green.png";
import fireflyOne from "assets/images/site/fireflies_1.png";
import fireflyTwo from "assets/images/site/fireflies_2.png";

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const { width } = useWindowSize();
  const opacity = useTransform(
    scrollYProgress,
    [0, width < 1250 ? 0.1 : 0.25],
    [1, 0]
  );

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="home">
      <div className="home-image" />
      <Fireflies fireflyCount={30} />
      <section className="home-banner">
        <div className="banner-image" />
        <motion.div className="banner-info" style={{ opacity: opacity }}>
          <h1>
            <span className="hack">Hack</span>
            <span className="uci">UCI</span>
          </h1>
          <h3>January 29-31, 2021</h3>
          <h3>Online</h3>
          {/*<h3>Apply by January 28th, 2021</h3>*/}
          {/*<Link*/}
          {/*  to="/apply"*/}
          {/*  className="btn btn-hack mr-auto"*/}
          {/*  aria-label="Apply to HackUCI 2021"*/}
          {/*>*/}
          {/*  Apply Now*/}
          {/*</Link>*/}
          <p>
            In light of the COVID-19 pandemic, HackUCI 2021 was fully virtual
            and open to all! Hackers participated from the comfort of their
            home.
          </p>
        </motion.div>
      </section>
      <div className="remaining-gradient">
        <section className="description-block">
          <div className="description-tagline">
            <div className="firefly-wrapper">
              <img src={fireflyOne} alt="firefly-one" />
              <motion.div
                animate={{ opacity: [0.8, 0.5, 0.7, 0.6, 1, 0.9, 0.4, 0.8] }}
                transition={{
                  duration: 9,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
            <p>
              <span className="block">
                600+&nbsp; <span className="yellow">hackers.</span>
              </span>
              <span className="block">
                40&nbsp;
                <span className="yellow">hours.</span>
              </span>
              <span className="block">
                $45,000 in&nbsp;
                <span className="yellow">prizes.</span>
              </span>
            </p>
            <div />
            <div className="firefly-wrapper">
              <img src={fireflyTwo} alt="firefly-two" />
              <motion.div
                animate={{ opacity: [0.8, 0.6, 0.5, 0.8, 0.7, 0.9, 0.4, 0.8] }}
                transition={{
                  duration: 9,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
          </div>
          <div className="description-tagline connect-inspire">
            <div className="firefly-wrapper">
              <img src={fireflyOne} alt="firefly-three" />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.4, 0.6, 0.5, 0.7, 0.5, 0.8] }}
                transition={{
                  duration: 9,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
            <p>
              <span className="block">Create</span>
              <span className="block">
                <span className="yellow">+</span>
              </span>
              <span className="block">Connect</span>
              <span className="block">
                <span className="yellow">+</span>
              </span>
              <span className="block">Inspire</span>
            </p>

            <div className="firefly-wrapper">
              <img src={fireflyTwo} alt="firefly-four" />
              <motion.div
                animate={{ opacity: [0.8, 1, 0.4, 0.8, 0.5, 0.7, 0.9, 0.5] }}
                transition={{
                  duration: 9,
                  repeat: "Infinity",
                  ease: "easeInOut"
                }}
                className="firefly-glow"
              />
            </div>
          </div>
          <div className="description-image-wrapper">
            <div className="description-image">
              <img
                src={hackathon}
                alt="four students sitting at a table in HackUCI during a previous year"
              />
            </div>

            <div className="description-text">
              <p>
                HackUCI is the largest collegiate hackathon in Orange County and
                we continue expanding and improving our event every year. Our
                focus? – Enhance the community around us by giving students the
                platform to unleash their creativity in an environment of
                forward thinking individuals.
              </p>
              <p>
                For HackUCI 2021, we plan to unite an even more diverse and
                talented group of developers to build the technology of
                tomorrow!
              </p>
              <p>
                In light of current events, HackUCI 2021 has had to make many
                changes to accommodate every Hacker virtually. We are in the
                process of making many changes to ensure that all attendees can
                experience the excitement and joy of HackUCI from the comfort of
                your home!
              </p>
            </div>
          </div>
        </section>
        <section className="volunteer-block">
          <h2>Lend a Hand</h2>
          <div className="volunteer-item-wrapper">
            <div className="volunteer-mentor-item">
              <img
                src={antMentor}
                alt="antmentor cat robot, saying 'teach' and 'tech"
              />
              <p>
                Due to the virtual format of HackUCI 2021, mentorship this year
                will be more important than ever. We need <b>YOUR</b> help to
                make this event successful and enjoyable for our hackers. Apply
                to be a mentor today!
              </p>
              <a
                href="https://forms.gle/isAivL8urFczgvNL6"
                className="btn btn-hack"
                aria-label="HackUCI 2021 Mentor Applications"
              >
                Apply to be a Mentor
              </a>
            </div>
            <div className="volunteer-mentor-item">
              <img
                src={antSponsor}
                alt="antsponsor cat robot, saying 'support us'"
              />
              <p>
                Interested in sponsoring HackUCI 2021? Check out our information
                below to learn more about our event and the outstanding
                achievements we have accomplished! For more information, email
                us at <a href="mailto:hack@uci.edu">hack@uci.edu</a>.
              </p>
              <Link
                to="/sponsors"
                className="btn btn-hack"
                aria-label="View Sponsors"
              >
                Sponsors
              </Link>
            </div>
          </div>
        </section>
        <section className="faq-block">
          <Fade duration={1000}>
            <h2>FAQ</h2>
            <div>
              {faqQuestions.map(function(item, index) {
                return (
                  <FAQCollapse
                    question={item.question}
                    answer={item.answer}
                    key={index}
                  />
                );
              })}
            </div>
          </Fade>
        </section>
        <section>
          <Fade duration={1000}>
            <CurrentSponsors />
          </Fade>
        </section>
        <section>
          <Fade duration={1000}>
            <CurrentPartners />
          </Fade>
        </section>
      </div>
    </div>
  );
}

export default Home;
