import style from "@/styles/home/services.module.css";
import Image from "next/image";

const Services = () => {
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
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.heading}>
          <div>نـحن نقدم مجمـوعة كـاملة من</div>
          <div>الخدمـات العامة والتجميـلية</div>
          <div>للعنـاية بالفـم</div>
        </div>
        <div className={style.cards}>
          {services.map((card, index) => (
            <div className={style.card} key={index}>
              <div className={style.icon}>
                <Image src={`${card.icon}`} alt="icon" width={50} height={50} />
              </div>
              <div className={style.title}>
                <h3>{card.title}</h3>
              </div>
              <div className={style.description}>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
