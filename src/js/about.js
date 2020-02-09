import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import arrows from '../assets/double-down.png';
import Header from './header';
import Footer from './footer';
import headshot from '../assets/headshot2.jpg';

class About extends Component {
  render() {
    return (
      <div id="aboutPage" className="pageDiv">
        <div className="scrollbarTrack">
          <div className="scrollbarThumb" />
        </div>
        <div className="hero-overlay">
          <div className="hero">
            <Header />
            <h1 className="title">About</h1>
            <Link to="#me" className="descriptionLink">
              <img src={arrows} className="arrow-down" />
            </Link>
          </div>
        </div>
        <div id="me" className="content">
          <img src={headshot} />
          <h1>Timothy Gass</h1>
          <p>
            A little bit about me, I have a deep appreciation for other
            cultures, because I grew up in Wulumuqi, or Urumqi, China, and I
            spent eight years of my life growing up there, from ages five to
            thirteen. I have been all over the world and many parts of Asia.
            This has given me a love of adventures and a love to be exposed to
            different experiences.
          </p>
          <p>
            I can still speak some Mandarin, though it's pretty rusty,
            but the experience of living in a foreign country has definitely
            left a lasting impact on my mind. Being able to innovate and
            consider other ways of approaching scenarios is a fundamental part
            of programming, and I find that seeing an entirely different
            culture, with entirely different technology promotes an
            understanding of many cultural or technological assumptions that
            many people do not even realize exist. I think growing up in China
            also is a large part of what got me into programming. I remember
            even from a young age, going to the smoke-filled internet cafes
            and playing Starcraft and Command and Conquer with other kids from
            my neighborhood or school. To me, there's a special uniting power
            in technology that has not been fully explored in the US.
          </p>
          <p>
            I loved the fact that my friends and I could bond over not only
            technology, but also video games, without ever having to speak the
            same language, though we did that for sure too. To me, the
            significance of programming is not only the function that it
            performs itself, but also the elegance of a design that supersedes
            the natural forms of language. It is, in my opinion, one of the
            best ways to write pure thoughts, outside of social context or
            connotation, so it's impact is that much stronger in international
            communities. To me, programming is not just a tool or method to
            accomplish a task, but a new form of communication, one that can
            communicate across many lines that previously would not be
            crossed. It amazes me that I can not only write a program that is
            usable and appreciated in multiple cultures, languages, countries,
            and demographics, but also that its code too is universal.
            Programming is not only a great technology, but a vital instrument
            in our social development, as we continue to approach
            globalization.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
