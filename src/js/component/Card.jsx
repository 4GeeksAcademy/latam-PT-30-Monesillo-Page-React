import React from "react";

export const Card = () => {
    return (
        <React.Fragment>

            <div className="col card text-center my-4 mx-1" style={{ width: "320px", height: "400px", marginBottom:"10rem"}}>
                <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top img-fluid" alt="..." style={{ width: "325px", height: "500px", }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer" style={{marginBottom:"14rem"}}>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </React.Fragment>
    )
};