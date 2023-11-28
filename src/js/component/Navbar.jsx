import React from "react";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid mx-3">
               <div className="container d-flex justify-content-between">
                    <div> 
                            <a className="navbar-brand text-light" href="#">Start Bootstrap</a>                 
                        </div>
                        <div>          
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                    <a className="nav-link text-light" href="#">Abaout</a>
                                    <a className="nav-link text-light" href="#">Services</a>
                                    <a className="nav-link disabled text-light" href="#" tabindex="-1">Contact</a>
                                </div>
                            </div>
                        </div>
               </div>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;
