import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; 
import imagenotfound from "../../../images/imagenotfound.jpg";



function Product(props) {

  return (
    <div className="mt-2">
      <Card style={{ width: "100%", height: "450px" }} className="mb-2">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Img
            style={{ height: "250px" }}
            variant="top"
            src={props.data.image ?? imagenotfound}
            alt={props.data.name || "Product image not found"}
          />
          <Card.Title className="text-center text-primary border-bottom pb-2">
            {props.data.name}, {props.data.qty}
            {props.data.unit}{" "}
            <small className="text-muted"> | {props.data.category}</small>
          </Card.Title>
          <Card.Text>
            <h5 className="pt-2">
              <big className="text-danger">-{props.data.discount ?? 0}% </big>
              <big>
                {" "}
                <sup>₹</sup>
                {props.data.price -
                  (props.data.price * (props.data.discount ?? 0)) / 100}
                <sup>00</sup>
              </big>
            </h5>

            <div>
              <span className="text-muted">
                M.R.P. <del>₹{props.data.price}</del>
              </span>
            </div>
            {/* <Card.Title className="text-center text-primary">
            {props.data.name}
          </Card.Title>
          <Card.Text>
            <h6> Category:{props.data.category}</h6>
            <h6> Price:{props.data.price}</h6>
            <h6>Quantity:{props.data.qty}</h6>
            <h6>Unit:{props.data.unit}</h6>
            <h6> Discount:{props.data.discount}</h6> */}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
