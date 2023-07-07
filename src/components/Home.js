import React from "react";
import { useNavigate } from "react-router";
import Navigation from "./Navigation";

function Home() {

  const navigate = useNavigate();
    
  const toDocument = () => {
      navigate('/documents');
  }
  const toAttendance = () => {
      navigate('/attendances');
  }


  return(
      <div>
        <div id="homediv" className="p-5 mb-3 rounded-0">
          <Navigation></Navigation>
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold head1">Experience</h1>
            <h1 className="display-5 fw-bold head2">Digital-format</h1>
            <h1 className="display-5 fw-bold head3">filtered Content</h1>
          </div>
        </div>
        
        <div className="home-blog">
          <img src="./images/blogman.jpg"></img>
          <div className="home-blog-heading">
            <h1>Fetch</h1>
            <h1>Read</h1>
            <h1>and Store <button id="blogbit-heading" onClick={() => toDocument()}>Documents</button></h1>
          </div>
        </div>

        <div className="home-book">
          <div className="home-book-heading">
            <h1>Mark your <button id="bookbit-heading" onClick={() => toAttendance()}>Attendances</button></h1>
          </div>
          <img src="./images/bookman.jpg"></img>
        </div>

        

        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"         crossOrigin="anonymous"></script>
      </div>
  )
}

export default Home;