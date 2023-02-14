import React from "react";
import "./Navbar.scss";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav id="nav1">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="nav1_left">
              <div className="nav1_icon">
                <HiOutlineBars2 />
              </div>
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
                <div className="elements_hover elm">
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
                  <ul className="elements_menus_ul">
                    <li>MENUS</li>
                    <li>Standard</li>
                    <li>Centered</li>
                    <li>With Center Logo</li>
                    <li>With Top Logo</li>
                    <li>Sidebar Wide</li>
                    <li>Sidebar Top Hamburger</li>
                    <li className="after_new">Sidebar Center Hamburger</li>
                  </ul>
                  <ul className="elements_last_ul">
                    <li>HAMBURGER MENUS</li>
                    <li>Standard Hamburger</li>
                    <li className="after_new">Centered Hamburger</li>
                    <li className="after_new">Creative Hamburger</li>
                  </ul>
                </div>
              </li>
              <li id="element_li">
                <p>03</p>
                <span>Portfolio</span>
                <div className="elements_hover elm">
                  <ul>
                    <li>ARCHIVE</li>
                    <li>Classic</li>
                    <li>Classic Contained</li>
                    <li>Classic Metro</li>
                    <li>Minimal</li>
                    <li>Minimal Metro</li>
                    <li className="after_new">Caption Cursor</li>
                    <li className="after_new">Caption Cursor Metro</li>
                    <li className="after_new">Sticky Contained</li>
                    <li className="after_new">Sticky Metro</li>
                  </ul>
                  <ul>
                    <li>SLIDERS</li>
                    <li>Horizontal Slider</li>
                    <li>Vertical Slider</li>
                    <li>Smooth Scroll Split Screen</li>
                    <li className="after_new">Interactive Links</li>
                    <li>Horizontal Carousel</li>
                    <li>Onepage with Smooth Scroll</li>
                    <li>Scattered with Smooth Scroll</li>
                    <li>Centered with Smooth Scroll</li>
                    <li>Horizontal Accordion</li>
                    <li className="after_new">Vertical Interactive Links</li>
                  </ul>
                  <ul>
                    <li>SINGLE PROJECT</li>
                    <li>Details with Left Gallery</li>
                    <li>Details with Right Gallery</li>
                    <li>Details with Bottom Gallery</li>
                    <li>Split Screen Left Gallery</li>
                    <li>Split Screen Right Gallery</li>
                    <li>Slider with Details</li>
                    <li>Slider with Custom Details</li>
                    <li className="after_new">Slider with Centered Details</li>
                  </ul>
                  <ul>
                    <li>PAGINATION TYPES</li>
                    <li>Standard</li>
                    <li className="after_new">Standard: Outlined</li>
                    <li className="after_new">Standard: Text</li>
                    <li>Load More</li>
                    <li className="after_new">Load More: Outlined</li>
                    <li className="after_new">Load More: Text</li>
                    <li>Lazy Load</li>
                    <li className="after_new">Lazy Load: Outlined</li>
                    <li className="after_new">Lazy Load: Text</li>
                  </ul>
                  <ul className="elements_menus_ul">
                    <li>HOVER EFFECTS</li>
                    <li>Classic: Image Scale</li>
                    <li>Classic: Image Overlay</li>
                    <li>Classic: Image Greyscale</li>
                    <li className="after_new">Classic: Image Transition</li>
                    <li>Minimal: Image Scale</li>
                    <li>Minimal: Image Overlay</li>
                    <li>Minimal: Image Greyscale</li>
                    <li className="after_new">Minimal: Image Transition</li>
                  </ul>
                  <ul className="elements_last_ul">
                    <li>APPEAR EFFECTS</li>
                    <li>Fade Up Effect</li>
                    <li>Fade Down Effect</li>
                    <li>Fade Left Effect</li>
                    <li>Fade Right Effect</li>
                    <li>Flip Up Effect</li>
                    <li>Flip Down Effect</li>
                    <li>Zoom In Effect</li>
                    <li>Zoom Out Effect</li>
                  </ul>
                </div>
              </li>
              <li id="element_li">
                <p>04</p>
                <span>Blog</span>
                <div className="elements_hover elm">
                  <ul>
                    <li>ARCHIVE</li>
                    <li>Classic</li>
                    <li>Classic Contained</li>
                    <li>Classic Metro</li>
                    <li>Minimal</li>
                    <li>Split</li>
                    <li>Split Contained</li>
                    <li>Split Metro</li>
                  </ul>
                  <ul>
                    <li>ARCHIVE</li>
                    <li>Inner</li>
                    <li>Inner Metro</li>
                    <li>Compact</li>
                    <li>Compact Contained</li>
                    <li>Compact Metro</li>
                    <li className="after_new">Simple</li>
                    <li className="after_new">Simple Contained</li>
                  </ul>
                  <ul>
                    <li>SINGLE POSTS</li>
                    <li>Standard</li>
                    <li>Standard: Featured Image</li>
                    <li>Standard: Fullscreen</li>
                    <li className="after_new">Split</li>
                    <li className="after_new">Split Featured Image</li>
                  </ul>
                  <ul>
                    <li>PAGINATION TYPES</li>
                    <li>Standard</li>
                    <li className="after_new">Standard: Outlined</li>
                    <li className="after_new">Standard: Text</li>
                    <li>Load More</li>
                    <li className="after_new">Load More: Outlined</li>
                    <li className="after_new">Load More: Text</li>
                    <li>Lazy Load</li>
                    <li className="after_new">Lazy Load: Outlined</li>
                    <li className="after_new">Lazy Load: Text</li>
                  </ul>
                  <ul className="elements_menus_ul">
                    <li>HOVER EFFECTS</li>
                    <li>Classic: None</li>
                    <li>Classic: Image Scale</li>
                    <li>Classic: Image Overlay</li>
                    <li>Classic: Image Greyscale</li>
                    <li>Minimal: None</li>
                    <li>Minimal: Image Scale</li>
                    <li>Minimal: Image Overlay</li>
                    <li>Minimal: Image Greyscale</li>
                  </ul>
                  <ul className="elements_last_ul">
                    <li>APPEAR EFFECTS</li>
                    <li>Fade Up Effect</li>
                    <li>Fade Down Effect</li>
                    <li>Fade Left Effect</li>
                    <li>Fade Right Effect</li>
                    <li>Flip Up Effect</li>
                    <li>Flip Down Effect</li>
                    <li>Zoom In Effect</li>
                    <li>Zoom Out Effect</li>
                  </ul>
                </div>
              </li>
              <li id="element_li">
                <p>05</p>
                <span>Shop</span>
                <div className="elements_hover elm">
                  <ul>
                    <li>ARCHIVE</li>
                    <li>Classic</li>
                    <li>Classic Contained</li>
                    <li>Classic Metro</li>
                    <li className="after_new">Minimal</li>
                    <li className="after_new">Minimal Contained</li>
                    <li className="after_new">Minimal Metro</li>
                  </ul>
                  <ul>
                    <li>HOVER EFFECTS</li>
                    <li className="after_new">Classic: Image Scale</li>
                    <li className="after_new">Classic: Image Overlay</li>
                    <li className="after_new">Classic: Image Greyscale</li>
                    <li className="after_new">Classic: Image Transition</li>
                    <li className="after_new">Minimal: Image Scale</li>
                    <li className="after_new">Minimal: Image Overlay</li>
                    <li className="after_new">Minimal: Image Greyscale</li>
                    <li className="after_new">Minimal: Image Transition</li>
                  </ul>
                  <ul>
                    <li>SINGLE PRODUCT</li>
                    <li>Sticky Gallery</li>
                    <li>Sticky Gallery Reflected</li>
                    <li className="after_new">Split Screen</li>
                    <li className="after_new">Split Screen Reflected</li>
                    <li className="after_new">Classic Gallery</li>
                    <li className="after_new">Classic Gallery Reflected</li>
                    <li className="after_new">Grid Gallery</li>
                    <li className="after_new">Grid Gallery Reflected</li>
                  </ul>
                  <ul className="elements_menus_ul">
                    <li>PRODUCT TYPES</li>
                    <li>Standard Product</li>
                    <li>Grouped Product</li>
                    <li>Variable Product</li>
                    <li>Virtual Product</li>
                    <li>External/Affiliate Product</li>
                    <li>Downloadable Product</li>
                    <li>On Sale Product</li>
                    <li>Out of Stock Product</li>
                  </ul>
                  <ul className="elements_last_ul">
                    <li>SHOP PAGES</li>
                    <li>Shop Layout</li>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <li>My Account</li>
                    <li>Sign In / Sign Up</li>
                  </ul>
                  <ul className="elements_last_ul">
                    <li>CATEGORY LAYOUT</li>
                    <li>Classic Category</li>
                    <li>Offset Category</li>
                  </ul>
                </div>
              </li>
              <li id="element_li" className="help_li">
                <p>06</p>
                <span>Pages</span>
                <div className="elements_hover elm" id="help">
                  <ul className="help_ul">
                    <li></li>
                    <li className="complex">
                      About
                      <AiOutlinePlus />
                      <div className="elements_hover elm" id="complex_part">
                        <ul className="help_ul">
                          <li></li>
                          <li>About Us</li>
                          <li>About Ver2</li>
                          <li>Hey, we're Ohio</li>
                          <li>Our Bureau</li>
                          <li>Our Studio</li>
                          <li className="after_new">About Creative</li>
                        </ul>
                      </div>
                    </li>
                    <li className="complex">
                      Contact
                      <AiOutlinePlus />
                      <div className="elements_hover elm" id="complex_part">
                        <ul className="help_ul">
                          <li></li>
                          <li>Contact: Agency</li>
                          <li>Contact: Blocks</li>
                          <li>Contact: Classic</li>
                          <li>Contact: Corporate</li>
                          <li>Contact: Simple</li>
                          <li className="after_new">Contact: Creative</li>
                        </ul>
                      </div>
                    </li>
                    <li className="complex">
                      Special Pages
                      <AiOutlinePlus />
                      <div className="elements_hover elm" id="complex_part">
                        <ul className="help_ul">
                          <li></li>
                          <li>404 Page</li>
                          <li>Coming Soon</li>
                          <li>Search Results</li>
                          <li>Sign In / Sign Up</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li id="element_li" className="help_li">
                <p>07</p>
                <span>Help</span>
                <div className="elements_hover elm" id="help">
                  <ul className="help_ul">
                    <li></li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Submit a Ticket</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <div className="nav1_right">
              <p>Let's talk</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
