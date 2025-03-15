import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"

export const Card = ({id,name,phone,address,email}) => {
    const { actions, store } = useContext(Context)



    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4 p-2">
                        <img src={rigoImage} className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">email: {email}</p>
                            <p className="card-text">address: {address}</p>
                            <p className="card-text">phone: {phone}</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
};
