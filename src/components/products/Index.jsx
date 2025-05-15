import React from "react";
import Product from "./product/Product";
import { Col, Container, Row } from "react-bootstrap";
import products from "../../db";
import Leftbar from "../leftbar/Leftbar";
import { useParams } from "react-router-dom";




 

function Index(props) { 
   let pcategory = useParams().item ?? "";
   let dproducts = products;

   const categories = [...new Set(products.map(item => item.category))];
   if (pcategory) {
     dproducts = products.filter((item) => item.category == pcategory);
     //console.log(dproducts);
  }
  

//console.log(categories);
  return (
    <div>
      <Row>
        <Col lg="12">
          <Leftbar menu={categories} ccat={pcategory}></Leftbar>
        </Col>
        <Col lg="12">
          <Row className=" gy-3">
            {
              dproducts.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Product data={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Index;

{/* <Col xs="6" md="4" sm="12" lg="4" className="">
  {products.map((product) => (
    <Product data={product}></Product>
  ))}
</Col>; */}