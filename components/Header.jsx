"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import style from "@/styles/header.module.css";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".link__6782",
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.2,
        stagger: 0.2,
      }
    );
  }, []);
  const handleClick = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.toggle(`${style.active}`);
    hamburger.classList.toggle(`${style.active}`);
  };
  const handleCloseMenu = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.remove(`${style.active}`);
    hamburger.classList.remove(`${style.active}`);
  };
  const [logoSrc, setLogoSrc] = useState('/images/logo.svg');

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')
      const scrolled = window.scrollY;
      const scrollThreshold = heroHeight.offsetHeight;
      if (scrolled >= scrollThreshold) {
        setLogoSrc('/images/logo-blue.svg');
        const hamColor = document.querySelector('.Ham-col')
        hamColor.style.fill = 'var(--blue)'
      } else {
        setLogoSrc('/images/logo.svg');
        const hamColor = document.querySelector('.Ham-col')
        hamColor.style.fill = 'var(--white)'
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.logo}>
         <Image 
         src={`${logoSrc}`}
         alt="pic"
         width={60}
         height={60}
         />
        </div>
        <div className={style.links} id="navigation">
          <ul>
            <li onClick={() => handleCloseMenu()} className="overflow-hidden">
              <a href="#services" className="link__6782">خدمــاتنـا</a>
            </li>
            <li onClick={() => handleCloseMenu()} className="overflow-hidden">
              <a href="#team" className="link__6782">فريـقــنا</a>
            </li>
            <li onClick={() => handleCloseMenu()} className="overflow-hidden">
              <a href="#testimonial" className="link__6782">أراء العمـلاء</a>
            </li>
            <li onClick={() => handleCloseMenu()} className="overflow-hidden">
              <a href="#contact" className="link__6782">تواصـل معنـا</a>
            </li>
          </ul>
        </div>
        <div
          className={style.hamburger}
          id="hamburger"
          onClick={() => handleClick()}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 10"
            width={30}
            height={30}
            fill="var(--white)"
            className="Ham-col"
          >
            <rect width="15" height="2" className={style.bar} />
            <rect y="4" width="15" height="2" className={style.bar_two} />
            <rect y="8" width="15" height="2" className={style.bar_three} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
