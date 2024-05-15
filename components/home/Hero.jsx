"use client";
import { useEffect } from "react";
import style from "@/styles/home/hero.module.css";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".ov-58",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.2,
        duration: 0.3,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <div className={style.content} id="hero">
      <div className={style.container}>
        <div className={style.body}>
          <div className="overflow-hidden">
            <div className="ov-58 opacity-0">الثقـــــــة و الآمـــــــــان</div>
          </div>
          <div className="overflow-hidden">
            <div className="ov-58 opacity-0">أســــــــــــــــــــــــــــــاس </div>
          </div>
          <div className="overflow-hidden">
            <div className="ov-58 opacity-0">علاقتنـــــا معـــكــــــــم</div>
          </div>
          <div className={`${style.btn} ov-58`}>
            <a href="tel:0643569435">إتصــــل بنــــا</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
