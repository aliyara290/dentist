import style from "@/styles/home/testimonial.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const testimonials = [
    {
      img: "/images/team/01.jpg",
      client: "أميرة العوضي",
      description:
        "خدمة متميزة ومتفانية، تجربة رائعة مع العيادة. أوصي بها للجميع.",
    },
    {
      img: "/images/team/02.jpg",
      client: "محمد أحمد",
      description:
        "لقد كانت تجربة رائعة، فريق العمل متعاون ومتفاني في عملهم. أشعر بالثقة التامة.",
    },
    {
      img: "/images/team/03.jpg",
      client: "فاطمة عبد الله",
      description:
        "اندهشت بالخدمة الاحترافية والمهنية، العيادة تستحق التقدير والاحترام.",
    },
    // {
    //   img: "/images/clients/img4.jpg",
    //   client: "علي الشهراني",
    //   description:
    //     "تجربة ممتازة، الفريق يعمل بكفاءة عالية وبيئة العمل مريحة للغاية.",
    // },
    // {
    //   img: "/images/clients/img5.jpg",
    //   client: "سارة الغامدي",
    //   description:
    //     "لقد استمتعت بزيارتي للعيادة، الخدمة كانت متميزة ومرضية بكل المقاييس.",
    // },
    // {
    //   img: "/images/clients/img6.jpg",
    //   client: "عبدالرحمن العتيبي",
    //   description:
    //     "تجربة فريدة، لم أشعر بمثل هذه الاحترافية والتفاني في الخدمة من قبل.",
    // },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1020 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1020, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={style.content} id="testimonial">
      <div className={style.container}>
        <div className={style.heading}>
          <div>ما يقوله عملاؤنا عنا</div>
        </div>
        <div className={style.cards}>
          {testimonials.map((card, index) => (
            //   <Carousel
            //     responsive={responsive}
            //     draggable={true}
            //     customTransition="all .9s ease"
            //     removeArrowOnDeviceType={["tablet", "mobile"]}
            //   >
            <div className={style.card} key={index}>
              <div className={style.top}>
                <div className={style.pic}>
                  <Image src={`${card.img}`} alt="pic" width={50} height={50} />
                </div>
                <div className={style.client}>
                  <h4>{card.client}</h4>
                </div>
              </div>
              <div className={style.description}>
                <p>{card.description}</p>
              </div>
              <div className={style.stars}>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45.91 44.2"
                    width={20}
                    height={20}
                  >
                    <path
                      d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                      transform="translate(-70.15 -27.9)"
                    />
                  </svg>
                </span>
              </div>
              <div className={style.teeth}>
                <Image
                  src={"/images/cards-icon/teeth.png"}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            //   </Carousel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
