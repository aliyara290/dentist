import style from "@/styles/banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={style.content} id="contact">
      <div className={style.container}>
        <div className={style.part}>
          <div>الثقـــــــة و الآمـــــــــان</div>
          <div>أســــــــــــــــــــــــــــــاس </div>
          <div>علاقتنـــــا معـــكــــــــم</div>
        </div>

        <div className={style.part}>
          <Image
            src={"/images/banner.png"}
            alt="pic"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
