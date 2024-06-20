import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";

function Header(props){
  if (!props.data) return null;

    const project = props.data.project;
    const github = props.data.github;
    const name = props.data.name;
    const description = props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <li>
                  <a href={project} className="button btn project-btn">
                    <i className="fa fa-book"></i>Project
                  </a>
                </li>
                <li>
                  <a href={github} className="button btn github-btn">
                    <i className="fa fa-github"></i>Github
                  </a>
                </li>                            
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#portfolio">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  
}

export default Header;
