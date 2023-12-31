import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./ReactCarousel.css";
import '../../components/css/carosal/Test.css'

const ReactCarousel = () => {
  return (
    <div className="carosal-data">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_C0897B89-27BC-4203-A8F8-3C761605D237_2022-5-23-T10-36-37.jpg?s=1440x580&t=bgmesh"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_421D96C4-78A9-400D-B60E-2016EBC531B4_2022-5-23-T10-45-9.jpg?s=1440x580&t=bgmesh"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_45EDB016-52D0-4951-A5C1-99209C28C89B_2022-5-31-T11-19-2.jpg?s=1440x580&t=bgmesh"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_78558E04-EA52-45C8-A148-4D402315F2CC_2022-7-4-T10-39-33.jpg?s=1440x580&t=bgmesh"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
            A novelist and her cover model wind up victims to a kidnapping deep in the jungle. Action comedy starring Sandra Bullock and Daniel Radcliffe.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
