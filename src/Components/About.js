import React from "react";
import Fade from "react-awesome-reveal";

function About(props){
  if (!props.data) return null;

    const name = props.data.name;
    const profilepic = '/images/' + props.data.image;
    const bio = props.data.bio;
    const phone = props.data.phone;
    const email = props.data.email;
    const resumeDownload = props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={process.env.PUBLIC_URL + profilepic}
                alt="Rex's Profile"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>
                      {name}<br />
                      Mobile: {phone}<br />
                      Email: {email}<br />
                      {props.data.address.line1}<br />
                      {props.data.address.line2}<br />
                      {props.data.address.line3}<br />
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" download>
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

export default About;
