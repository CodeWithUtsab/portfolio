import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "./Slide";
import TestimonialApi from "./TestimonialApi";

import "./Testimonial.css";

const Testimonial = () => {
  const prevClick = () => {
    setIndex(index - 1);
  };
  const nextClick = () => {
    setIndex(index + 1);
  };
  const [data, setData] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <section className="Testimonial" id="clients">
        <div className="container">
          <div className="heading text-center">
            <h4 className="capitalize">what clients say</h4>
            <h1 className="uppercase">testimonial</h1>
          </div>
          <div className="slide">
            {data.map((value, valueIndex) => {
              return (
                <Slider
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}
            <div className="slide_button">
              <button className="button btn_shadow prev_btn" onClick={prevClick}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="button btn_shadow next_btn" onClick={nextClick}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
