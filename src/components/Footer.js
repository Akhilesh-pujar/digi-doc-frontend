import React from "react";
import { Link } from "react-router-dom";

const d = new Date();
const year = d.getFullYear();

function Footer() {
    return (
        <div className="container bg-dark" id="foot">
            <footer className="py-5">
              <div className="row">
                <div className="col-lg-5 col-xs-10">
                  <h5>DigiDoc</h5>
                  <p className="nav flex-column">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum, sint debitis atque error magni perferendis at commodi quae numquam! Aliquid similique explicabo, placeat, quasi eos suscipit cumque, reiciendis et dolor excepturi ratione. Culpa optio id quas vel, magni assumenda.
                  </p>
                </div>

                <div className="col-lg-2 col-xs-10">
                  <h5>Quick Links</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <Link to="/documents" className="nav-link p-0" style={{color: "inherit"}}>Documents</Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link to="/attendances" className="nav-link p-0" style={{color: "inherit"}}>Attendances</Link>
                    </li>
                    
                  </ul>
                </div>

              </div>

              <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>&copy; {year} DigiDoc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3"><a className="link-light" href="#"><i className="fab fa-twitter"></i></a></li>
                  <li className="ms-3"><a className="link-light" href="#"><i className="fab fa-instagram"></i></a></li>
                  <li className="ms-3"><a className="link-light" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </footer>
        </div>
    );
}

export default Footer;