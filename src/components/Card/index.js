import React from "react";
import image from "../../employee.png";
import "./style.css";

class Card extends React.Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <img src={image} className="card-img-top" alt="img" />
                    <p className="card-text">{this.props.role}</p>
                    <p className="card-text">{this.props.department}</p>
                </div>
            </div>
        )
    }
}

export default Card;