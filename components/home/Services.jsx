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
        duration: 1,
        // stagger: 0.2,
        onComplete: () => {
          gsap.to(".card_img__824", {
            rotate: 360,
            opacity: 1,
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
      title: "تاج السيراميك",
      description:
      'تركيب تاج السيراميك لتغطية الأسنان المتضررة وحمايتها، والمساعدة في إستعادة الوظائف والشكل الكامل..',
    },
    {
      icon: "/images/cards-icon/root-canal.png",
      title: "قنوات الجذر",
      description: 'علاج الأسنان المصابة بالتسوس العميق أو التهاب الجذور، لإنقاذ الأسنان والحفاظ على بنيتها.'
    },
    {
      icon: "/images/cards-icon/regular.png",
      title: "الفحوصات الدورية",
      description: 'الفحص المنتظم للأسنان واللثة للكشف المبكر عن أية مشاكل للحفاظ على صحة الفم.',
    },
    {
      icon: "/images/cards-icon/clean.png",
      title: "تعبئة بيضاء",
      description: 'ملء الأسنان المتضررة والمجوفة باستخدام مواد التعبئة البيضاء لمظهر طبيعي وجميل.',
    },
    {
      icon: "/images/cards-icon/chair.png",
      title: "العناية بالأسنان",
      description: 'توفير النصائح الضرورة للعناية اللازمة للحفاظ على صحة الأسنان واللثة والوقاية من المشاكل المحتملة.',
    },
    {
      icon: "/images/cards-icon/implant.png",
      title: "زرع أسنان",
      description: 'تركيب الأسنان الاصطناعية الثابتة بشكل دائم، من خلال إستبدال الأسنان المفقودة أو المتضررة بشكل كبير..',
    },
  ];

  return (
    <div className={style.content} id="services">
      <div className={style.container}>
        <Heading
          topHeading={" نــــقدم لكم مجمـوعة كـاملة مـن"}
          botHeading={"خدمـات الترميم والتجميـل"}
          thirdHeading={"للعنـاية بالفـم واللثــــة"}
          centerHeading={true}
          showSubHeading={false}
          showThirdHeading={true}
          showBotHeading={true}
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
