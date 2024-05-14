"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/services.module.css";
import Heading from "@/components/Heading";
import Image from "next/image";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".card_det__7429",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.2,
        stagger: 0.2,
        onComplete: () => {
          gsap.to(".card_img__824", {
            rotate: 360,
          });
        },
        scrollTrigger: {
          trigger: ".card_det__7429",
          start: "bottom bottom",
          end: "bottom center",
          ease: "power4.inOut",
        },
      }
    );
  }, []);
  const services = [
    {
      icon: "/images/cards-icon/crown.png",
      title: "تاج سيراميكي",
      description:
        "تركيب تاج سيراميكي لتغطية الأسنان المتضررة واستعادة الوظيفة والجمال.",
    },
    {
      icon: "/images/cards-icon/root-canal.png",
      title: "قنوات الجذر",
      description:
        "علاج الأسنان المصابة بالتسوس العميقة أو التهاب الجذور لإنقاذ السن والحفاظ على بنيته.",
    },
    {
      icon: "/images/cards-icon/regular.png",
      title: "الفحوصات الدورية",
      description:
        "فحص منتظم للأسنان واللثة للكشف المبكر عن أية مشاكل والحفاظ على الصحة العامة للفم.",
    },
    {
      icon: "/images/cards-icon/clean.png",
      title: "تعبئة بيضاء",
      description:
        "ملء الأسنان المتضررة أو المجوفة باستخدام مواد تعبئة بيضاء لمظهر طبيعي وجميل.",
    },
    {
      icon: "/images/cards-icon/chair.png",
      title: "العناية بالأسنان",
      description:
        "توفير النصائح والعناية اللازمة للحفاظ على صحة الأسنان واللثة والوقاية من المشاكل المحتملة.",
    },
    {
      icon: "/images/cards-icon/implant.png",
      title: "زرع أسنان",
      description:
        "تركيب الأسنان الاصطناعية بشكل دائم لاستبدال الأسنان المفقودة واستعادة الوظيفة والمظهر.",
    },
  ];

  return (
    <div className={style.content} id="services">
      <div className={style.container}>
        <Heading
          topHeading={"نـحن نقدم مجمـوعة كـاملة من"}
          botHeading={"الخدمـات العامة والتجميـلية"}
          thirdHeading={"للعنـاية بالفـم"}
          centerHeading={true}
          showSubHeading={false}
          showThirdHeading={true}
        />
        {/* <div className={style.heading}>
          نـحن نقدم مجمـوعة كـاملة من
          <div>الخدمـات العامة والتجميـلية</div>
          <div>للعنـاية بالفـم</div>
        </div> */}
        <div className={style.cards}>
          {services.map((card, index) => (
            <div className={style.card} key={index}>
              <div className={style.icon}>
                <Image
                  src={`${card.icon}`}
                  alt="icon"
                  width={50}
                  height={50}
                  className="card_img__824"
                />
              </div>
              <div className={`${style.title} overflow-hidden`}>
                <h3 className="card_det__7429">{card.title}</h3>
              </div>
              <div className={`${style.description} overflow-hidden`}>
                <p className="card_det__7429">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
