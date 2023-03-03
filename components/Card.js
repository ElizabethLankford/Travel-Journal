import React from "react"

export default function Card(props){
    return(
        <div className="card-container">
            <img height="165px" width="125px" src={props.item.imageUrl} className="card-img" />
            <div className="card-info">
                <div className="card-links" >  
                    <img src="./images/pin.png" />
                    <span className="pin-location">{props.item.location}</span>
                    <a target="_blank" href={props.item.googleMapsUrl} className="google-map-link">View on Google Maps</a>
                </div>
                <h2 className="location" >{props.item.title}</h2>
                <h5 className="dates" >{props.item.date}</h5>
                <p className="summary" >{props.item.description}</p>
            </div>
        </div>
        
    )
}