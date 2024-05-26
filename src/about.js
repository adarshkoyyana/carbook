import React from 'react';
import logo from './images/logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/TestimonialSlider.css'

const App = () => {
  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const testimonials = [
    {
      img: require('./images/quote-icon.png'), // Replace with actual image paths
      quote: "The service was performed well. I am particularly impressed by the constant updates I kept getting about the issues and the progress of my repairs. I also appreciate the transparency shown by you in terms of the costs and parts for repairs. Please keep it up. ",
      name: "Amit Gupta"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: "In simple words, one stop shop for all luxury cars. I had taken my C class for the check engine light problem, these guys nailed it down pretty quickly and sorted it out very easily. Thanks to them, keep up the good work.",
      name: "Sumit Saini"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: "Had given my Audi Q3 for dent removal and painting service. Very well done and quality of service is very professional. I am very happy with the car after the service and appreciate the quality of workmanship, and delivery of the car as promised.",
      name: "Rakesh Kumar"
    },
    {
      img: require('./images/quote-icon.png'),
      quote: " Fantastic service. I got my Audi for some dent + paint work and the work was perfect. Yes, PERFECT. What was best is the professionalism that they showed and the small extras that they did which made it truly World-Class service.",
      name: "Harsh Pathak"
    }
  ];
  return (
    <div>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-8">
              <div className="header-top-action">
                <ul>
                  <li><a href="mailto:haneef@carbiamotors.com"><i className="las la-envelope"></i> haneef@carbiamotors.com</a></li>
                  <li><a href="https://wa.me/+919052091234" target="_blank"><i className="lab la-whatsapp"></i> For Appointment & Whatsapp: 9052091234</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-4 text-sm-right">
              <div className="top-call">
                <a href="tel:+447342140790"><i className="las la-clock"></i> Monday-Saturday 9:00AM - 6:00PM</a>
                <a href="#" target="_blank">&nbsp; |&nbsp; <i className="lab la-facebook-f"></i></a>
                <a href="#" target="_blank"> <i className="lab la-linkedin-in"></i></a>
                <a href="#" target="_blank"> <i className="lab la-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0 align-items-center">
            <a className="navbar-brand" href="index">
              <div className="logo"><img src={logo} alt="" /></div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="las la-bars "></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item active"><a className="nav-link" href="main">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="contact">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="appointment">Book Appointment</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div>
      <div className="inner-banner">
        <h1>About Us</h1>
        <img src={require("./images/inner-banner.jpg")} alt="" className="img-responsive" />
      </div>

      <div className="inner-page">
        <div className="container">
          <div className="row align-items-center pd100">
            <div className="col-lg-6">
              <div className="about_img scene mb-4 mb-lg-0">
                <img src={require("./images/about_img1.jpg")} alt="" className="img-responsive" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-text">
                <div className="heading_s1">
                  <h2 className="title">About Carbia Motors</h2>
                </div>
                <p>Carbia Motors, located in Hyderabad, Telangana, is a premier automobile service center specializing in comprehensive car repair and maintenance services. Our dedication lies in enhancing vehicle performance through expert servicing, repairs, and a vast inventory of spare parts. Utilizing cutting-edge diagnostic testers and tools, our skilled technicians adeptly tackle various automotive issues spanning engine, transmission, brake, suspension, AC, and electrical repairs.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center flex-lg-row-reverse mt-7">
            <div className="col-lg-6">
              <div className="about_img scene mb-4 mb-lg-0">
                <img src={require("./images/about_img2.jpg")} alt="" className="img-responsive" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-text">
                <div className="heading_s1">
                  <h2 className="title">Why Carbia Motors</h2>
                </div>
                <p>Our hallmark is customer satisfaction, reflected in top-tier after-sales service and enduring client relationships. We cater to a diverse array of car services, notably focusing on luxury vehicles. From Periodic maintenance to intricate body shop repairs, meticulous detailing, common repairs, scanning, diagnostics, transparent pricing, a sophisticated workshop, and swift doorstep express service.</p>
              </div>
            </div>
          </div>

          <div className="about-team">
            <div className="title-col">
              <h2 className="title">Our Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="staff-col">
                  <div className="staff-pic"><img src={require("./images/team-1.jpg")} alt="" /></div>
                  <h4>Mr. Haneef</h4>
                  <p><strong>Director & CEO</strong></p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="staff-col">
                  <div className="staff-pic"><img src={require("./images/team-2.jpg")} alt="" /></div>
                  <h4>Mr. Dharmendra Singh</h4>
                  <p><strong>Director</strong></p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="staff-col">
                  <div className="staff-pic"><img src={require("./images/team-1.jpg")} alt="" /></div>
                  <h4>Mr. Ramesh Chandra</h4>
                  <p><strong>Sales Person</strong></p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="staff-col">
                  <div className="staff-pic"><img src={require("./images/team-2.jpg")} alt="" /></div>
                  <h4>Mr. Nitish Sharma</h4>
                  <p><strong>Technician Head</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonials">
      <div className="container">
        <div className="title-col">
          <h2 className="title">Our Testimonials</h2>
        </div>

        <Slider {...testimonialSettings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item">
              <div className="testi">
                <div className="user-quote">
                  <img src={testimonial.img} alt="quote-icon" />
                </div>
                <p>{testimonial.quote}</p>
                <div className="teststar">
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                </div>
                <h4>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="footer-appoint-sec">
          <div className="leftfoot-appoint">
            <div className="leftappoint-ico"><img src={require("./images/foot-calender-icon.png")} alt="" /></div>
            <div className="leftappoint-txt">
              <p>Need a Service Consultation?</p>
              <h4>JUST FILL THE FORM & YOU'RE DONE!</h4>
            </div>
          </div>
          <div className="rightfoot-appoint">
            <a href="appointment" className="common-btn">Book A Free Consultation</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="contact-conten">
              <h3>Contact Info</h3> 
              <p><strong><i className="las la-map-marker"></i></strong> <span>PL No. 131 Ranganadha Nagar, Gopanpally, Srilingampally, Hyderabad 500019.</span></p>
              <p><strong><i className="las la-phone"></i></strong> <a href="tel:919780429999">+91 9780429999</a>, &nbsp; <a href="tel:919705782222">+91 9705782222</a></p>
              <p><strong><i className="lab la-whatsapp"></i></strong> <a href="https://wa.me/919052091234" target="_blank">+91 9052091234</a></p>
              <p><strong><i className="las la-envelope"></i></strong> <a href="mailto:haneef@carbiamotors.com">haneef@carbiamotors.com</a></p>			     	
            </div>
            <div className="footer-social">
              <a href="#" target="_blank"><i className="lab la-facebook-f"></i></a>
              <a href="#" target="_blank"><i className="lab la-instagram"></i></a>
              <a href="#" target="_blank"><i className="lab la-youtube"></i></a>
              <a href="#" target="_blank"><i className="lab la-linkedin-in"></i></a>	
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="quicklinks"><h3>Quick Links</h3>
              <div className="quicklinks-cont">
                <p><a href="main">Home</a></p>
                <p><a href="about">About Us</a></p>
                <p><a href="appointment">Book Appointment</a></p> 
                <p><a href="https://wa.me/919780429999" target="_blank">Chat With Us</a></p> 
                <p><a href="contact">Contact Us</a></p> 
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="quicklinks"><h3>Carbia SERVICES</h3>
              <div className="quicklinks-cont">
                <p><a href="services">Best Periodic Services</a></p>
                <p><a href="services">Repairs & Maintenance</a></p>
                <p><a href="services">Electrical Repair & Diagnostics</a></p> 
                <p><a href="services">Denting & Painting</a></p>
                <p><a href="services">Car Spa / Detailing</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright"><div className="container"><p>© 2024 Carbia Motors Pvt. Ltd. All Rights Reserved.</p></div></div>
    </footer>
    </div>
  );
}

export default App;
