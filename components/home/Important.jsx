"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/important.module.css";
import Image from "next/image";

const Important = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.fromTo(
  //     ".text__7429",
  //     {
  //       y: "100%",
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       stagger: 0.3,
  //       scrollTrigger: {
  //         trigger: ".text__7429",
  //         start: "bottom bottom",
  //         end: "bottom center",
  //         ease: "power4.inOut",
  //       },
  //     }
  //   );
  // }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".pic__74g89",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".pic__74g89",
          start: "bottom bottom",
          end: "bottom center",
          ease: "power4.inOut",
        },
        onComplete: () => {
          gsap.fromTo(
            ".text__7429",
            {
              y: "100%",
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.3,
              scrollTrigger: {
                trigger: ".text__7429",
                start: "bottom bottom",
                end: "bottom center",
                ease: "power4.inOut",
              },
            }
          );
        },
      }
    );
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.pics}>
          <div className={style.row}>
            <div className={`${style.pic} pic__74g89`}>
              <Image
                src={"/images/random/001.jpg"}
                alt="pic"
                width={200}
                height={200}
              />
            </div>
            <div className={`${style.pic} pic__74g89`}>
              <Image
                src={"/images/random/002.jpg"}
                alt="pic"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={style.row_2}>
            <div className={`${style.pic} pic__74g89`}>
              <Image
                src={"/images/random/003.jpg"}
                alt="pic"
                width={200}
                height={200}
              />
            </div>
            <div className={`${style.pic} pic__74g89`}>
              <Image
                src={"/images/random/005.jpg"}
                alt="pic"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.heading}>
            <h1 className="text__7429">
              العنــاية بالأسنان مهمة لصحتـك العـامة وعــافيتك
            </h1>
          </div>
          <div className={style.lists}>
            <ul>
              <li className="text__7429">
                <div className={style.symbol}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.16 30.16"
                    fill="var(--blue)"
                    width={15}
                    height={15}
                  >
                    <path
                      class="cls-1"
                      d="M40.08,24.12v1.76a1.19,1.19,0,0,0,0,.26,14.25,14.25,0,0,1-1.72,5.94,14.86,14.86,0,0,1-10.68,7.76c-.58.11-1.17.16-1.75.24H24.12l-.23,0a14.15,14.15,0,0,1-6-1.72,14.86,14.86,0,0,1-7.76-10.69c-.11-.57-.16-1.16-.24-1.74V24.12a1.19,1.19,0,0,0,.05-.26,14.25,14.25,0,0,1,1.72-5.94,14.86,14.86,0,0,1,10.68-7.76c.58-.11,1.17-.16,1.75-.24h1.76l.23.05a14.15,14.15,0,0,1,6,1.72,14.86,14.86,0,0,1,7.76,10.69C40,23,40,23.54,40.08,24.12ZM25,37.72A12.72,12.72,0,1,0,12.28,25,12.72,12.72,0,0,0,25,37.72Z"
                      transform="translate(-9.92 -9.92)"
                    />
                    <path
                      class="cls-1"
                      d="M23,27.33a2.36,2.36,0,0,1,.2-.31l6.68-6.68a1.28,1.28,0,0,1,.95-.46,1.17,1.17,0,0,1,1,1.85,2.61,2.61,0,0,1-.27.31l-7.6,7.6a1.22,1.22,0,0,1-2,0L18.41,26.1a1.18,1.18,0,1,1,1.65-1.68c.88.87,1.75,1.75,2.62,2.62Z"
                      transform="translate(-9.92 -9.92)"
                    />
                  </svg>
                </div>
                <div className={style.text}>
                  <h4>العناية بالأسنان والعافية الشاملة</h4>
                  <p>
                    العناية بالأسنان ليست مجرد ابتسامة مشرقة؛ بل هي جزء أساسي من
                    الصحة الشاملة. الفحوصات الدورية وممارسات النظافة الشخصية
                    ضرورية لمنع الأمراض النظامية، مما يعكس دور الفم كمدخل
                    للعافية.
                  </p>
                </div>
              </li>
              <br />
              <li className="text__7429">
                <div className={style.symbol}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.16 30.16"
                    fill="var(--blue)"
                    width={15}
                    height={15}
                  >
                    <path
                      class="cls-1"
                      d="M40.08,24.12v1.76a1.19,1.19,0,0,0,0,.26,14.25,14.25,0,0,1-1.72,5.94,14.86,14.86,0,0,1-10.68,7.76c-.58.11-1.17.16-1.75.24H24.12l-.23,0a14.15,14.15,0,0,1-6-1.72,14.86,14.86,0,0,1-7.76-10.69c-.11-.57-.16-1.16-.24-1.74V24.12a1.19,1.19,0,0,0,.05-.26,14.25,14.25,0,0,1,1.72-5.94,14.86,14.86,0,0,1,10.68-7.76c.58-.11,1.17-.16,1.75-.24h1.76l.23.05a14.15,14.15,0,0,1,6,1.72,14.86,14.86,0,0,1,7.76,10.69C40,23,40,23.54,40.08,24.12ZM25,37.72A12.72,12.72,0,1,0,12.28,25,12.72,12.72,0,0,0,25,37.72Z"
                      transform="translate(-9.92 -9.92)"
                    />
                    <path
                      class="cls-1"
                      d="M23,27.33a2.36,2.36,0,0,1,.2-.31l6.68-6.68a1.28,1.28,0,0,1,.95-.46,1.17,1.17,0,0,1,1,1.85,2.61,2.61,0,0,1-.27.31l-7.6,7.6a1.22,1.22,0,0,1-2,0L18.41,26.1a1.18,1.18,0,1,1,1.65-1.68c.88.87,1.75,1.75,2.62,2.62Z"
                      transform="translate(-9.92 -9.92)"
                    />
                  </svg>
                </div>
                <div className={style.text}>
                  <h4>تأثير الرعاية الصحية للأسنان على الصحة</h4>
                  <p>
                    تتحصن الإجراءات الوقائية السنية، مثل الفحوصات الدورية
                    والنظافة السليمة، ضد المشاكل السنية. هذه العادات تضمن ليس
                    فقط صحة الفم ولكن أيضًا المساهمة في العافية على المدى
                    الطويل.
                  </p>
                </div>
              </li>
              <br />
              <li className="text__7429">
                <div className={style.symbol}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.16 30.16"
                    fill="var(--blue)"
                    width={15}
                    height={15}
                  >
                    <path
                      class="cls-1"
                      d="M40.08,24.12v1.76a1.19,1.19,0,0,0,0,.26,14.25,14.25,0,0,1-1.72,5.94,14.86,14.86,0,0,1-10.68,7.76c-.58.11-1.17.16-1.75.24H24.12l-.23,0a14.15,14.15,0,0,1-6-1.72,14.86,14.86,0,0,1-7.76-10.69c-.11-.57-.16-1.16-.24-1.74V24.12a1.19,1.19,0,0,0,.05-.26,14.25,14.25,0,0,1,1.72-5.94,14.86,14.86,0,0,1,10.68-7.76c.58-.11,1.17-.16,1.75-.24h1.76l.23.05a14.15,14.15,0,0,1,6,1.72,14.86,14.86,0,0,1,7.76,10.69C40,23,40,23.54,40.08,24.12ZM25,37.72A12.72,12.72,0,1,0,12.28,25,12.72,12.72,0,0,0,25,37.72Z"
                      transform="translate(-9.92 -9.92)"
                    />
                    <path
                      class="cls-1"
                      d="M23,27.33a2.36,2.36,0,0,1,.2-.31l6.68-6.68a1.28,1.28,0,0,1,.95-.46,1.17,1.17,0,0,1,1,1.85,2.61,2.61,0,0,1-.27.31l-7.6,7.6a1.22,1.22,0,0,1-2,0L18.41,26.1a1.18,1.18,0,1,1,1.65-1.68c.88.87,1.75,1.75,2.62,2.62Z"
                      transform="translate(-9.92 -9.92)"
                    />
                  </svg>
                </div>
                <div className={style.text}>
                  <h4>قوة الرعاية الوقائية للأسنان</h4>
                  <p>
                    العناية بالأسنان هي ركن أساسي في العافية الشاملة، حيث تؤثر
                    على الكلام والتغذية وثقة الذات. دمجها في روتين الحياة يعزز
                    حياة نابضة بالحيوية والازدهار.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Important;
