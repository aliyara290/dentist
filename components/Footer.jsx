import style from "@/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.content} id="contact">
      <div className={style.container}>
        <div className={style.links}>
          <ul>
            <li>
              <a href="#services">خدمــاتنـا</a>
            </li>
            <li>
              <a href="#team">فريـقــنا</a>
            </li>
            <li>
              <a href="#testimonial">أراء العمـلاء</a>
            </li>
            <li>
              <a href="#contact">تواصـل معنـا</a>
            </li>
          </ul>
        </div>
        <div className={style.return}>
            <a href="#hero">➡</a></div>
      </div>
    </div>
  );
};

export default Footer;
