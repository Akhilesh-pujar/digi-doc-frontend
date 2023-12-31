import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Form, FormControl, Button } from "react-bootstrap";

function NavSearch() {

    const navigate = useNavigate();
    const [search,setSearch] = useState("")

    function handleChange(e){
      e.preventDefault();
      var q = e.target.value;
      setSearch(q);
    }
    function handleClick()
    {
      if(search!="")
      {
        navigate("/attendances/" + search)
      }
      else{
          navigate("/attendances")
      }
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-none">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src="./images/logo.png" alt="logo" width="150"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/documents">Documents</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/attendances">Attendances</Link>
                </li>
               
                </ul>
            </div>
            <Form className="d-flex  align-items-center justify-content-center search-nav">
                <FormControl
                    type="search"
                    placeholder="Search Attendences"
                    className="font-size-14px"
                    aria-label="Search"
                    value={search}
                    onChange={handleChange}
                    size= "md py-3"
                />
                <Button className="py-1" variant="outline-success" onClick={handleClick}>Search</Button>
            </Form>
            </div>
        </nav>
    );
}

export default NavSearch;