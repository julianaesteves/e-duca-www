import style from './feedbacks.module.scss'
//import feedbackBackground from '../../../../assets/img/image01.png';
import React, { Component } from "react";
import Slider from "react-slick";

export default class Feedbacks extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        
        <div>
          <h2 className={style.title}>Feedbacks</h2>
          <Slider {...settings}>
            <div>
              <div className={style.cards}>
                <h2>Marcos souza</h2>

              </div>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            
          </Slider>
        </div>
      );
    }
  }