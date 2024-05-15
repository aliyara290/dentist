"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/team.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";

const Team = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".team_det__03r", {
      y: '100%',
      opacity: 0,
    }, {
        opacity: 1,
      y: 0,
      duration: 0.4,
      trigger: 0.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".team_det__03r",
        start: "center bottom",
        end: "bottom center",
        ease: "power4.inOut",
      },
    });
  }, []);
  return (
    <div className={style.content} id="team">
      <div className={style.container}>
        <Heading
          topHeading={"جَيشنا"}
          botHeading={"فخدمتك"}
          centerHeading={true}
          showSubHeading={false}
        />
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.pic}>
              <Image
                src={"/images/team/01.jpg"}
                alt="pic"
                width={600}
                height={600}
              />
            </div>
            <div className={style.details}>
              <h3 className="team_det__03r">محمد العوادي</h3>
              <span className="team_det__03r">جامعة المجمعة للعلوم الطبية</span>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.pic}>
              <Image
                src={"/images/team/03.jpg"}
                alt="pic"
                width={600}
                height={600}
              />
            </div>
            <div className={style.details}>
              <h3 className="team_det__03r">ندى زايد</h3>
              <span className="team_det__03r">جامعة الباحة للعلوم الطبية</span>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.pic}>
              <Image
                src={"/images/team/02.jpg"}
                alt="pic"
                width={600}
                height={600}
              />
            </div>
            <div className={style.details}>
              <h3 className="team_det__03r">عبد الله الجمالي</h3>
              <span className="team_det__03r">جامعة جازان للعلوم الطبية</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
