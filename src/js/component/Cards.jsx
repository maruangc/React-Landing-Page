import React from "react";


const Cards = ({ image }) =>{
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <img src={image} className="card-img-top"/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Cards