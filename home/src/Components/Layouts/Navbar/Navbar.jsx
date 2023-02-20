import React from "react";
import "./../Navbar/Navbar.scss";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav id="nav1">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="nav1_left">
              {/* <div className="nav1_icon">
                <HiBars3BottomLeft />
              </div> */}
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8">
            <ul className="nav1_centre">
              <li>
                <p>01</p>
                <span>Home</span>
              </li>
              <li id="element_li">
                <p>02</p>
                <span>Elements</span>
              </li>
              <li>
                <p>03</p>
                <span>Portfolio</span>
              </li>
              <li>
                <p>04</p>
                <span>Blog</span>
              </li>
              <li>
                <p>05</p>
                <span>Shop</span>
              </li>
              <li>
                <p>06</p>
                <span>Pages</span>
              </li>
              <li>
                <p>07</p>
                <span>Help</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            {/* <div className="nav1_right">
              <p>Let's talk</p>
            </div> */}
          </div>
          <div className="elements_hover">
            <ul>
              <li>WIDGETS</li>
              <li>Accordion</li>
              <li>Banner</li>
              <li>Blog Posts</li>
              <li>Button</li>
              <li>Call to Action</li>
              <li>Carousel</li>
              <li>Circle Progres Bar</li>
              <li>Clients Logo</li>
              <li>Compare</li>
            </ul>
            <ul>
              <li>WIDGETS</li>
              <li>Contact Form</li>
              <li>Countdown</li>
              <li>Counter</li>
              <li>Dynamic Text</li>
              <li>Fullscreen Slider</li>
              <li>Gallery</li>
              <li>Google Map</li>
              <li>Heading</li>
              <li>Horizontal Accordion</li>
            </ul>
            <ul>
              <li>WIDGETS</li>
              <li>Icon Box</li>
              <li>Instagram Feed</li>
              <li>Message</li>
              <li>Parallax</li>
              <li>Portfolio Projects</li>
              <li>Pricing List</li>
              <li>Pricing Table</li>
              <li>Process</li>
              <li>Progress Bar</li>
            </ul>
            <ul>
              <li>WIDGETS</li>
              <li>Services Table</li>
              <li>Shop Category</li>
              <li>Social Networks</li>
              <li>Subscribe Form</li>
              <li>Tabs</li>
              <li>Team Group</li>
              <li>Team Member</li>
              <li>Testimonial</li>
              <li>Video</li>
            </ul>
            <ul>
              <li>MENUS</li>
              <li>Standard</li>
              <li>Centered</li>
              <li>With Center Logo</li>
              <li>With Top Logo</li>
              <li>Sidebar Wide</li>
              <li>Sidebar Top Hamburger</li>
              <li>Sidebar Center Hamburger</li>
            </ul>
            <ul>
              <li>HAMBURGER MENUS</li>
              <li>Standard Hamburger</li>
              <li>Centered Hamburger</li>
              <li>Creative Hamburger</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
