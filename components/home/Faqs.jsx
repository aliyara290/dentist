"use client";
import { useState, useEffect } from "react";
import style from "@/styles/home/faqs.module.css";
import Heading from "@/components/Heading";

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleClick = (index) => {
    setShowAnswer(index === showAnswer ? null : index);
  };

  const faq = [
    {
      question: "كيف يمكنك حجز موعد؟",
      answer:
        "نتيح لكم خدمة حجز المواعد من خلال التواصل معنا عبر الواتس اب أو البريد الإلكروني بشكل فوري وسريع .كما يمكنكم ذلك أيضاً حضورياً من خلال زيارة مقر عيادتنا.",
    },
    {
      question: "ماهي مدة العلاج؟",
      answer:
        "تختلف مدة العلاج من خدمة لأخرى، وكذلك من حالة لحالة. ولمعرفة المدة اللازمة للعلاق يرجى التواصل مع أحد الأخصائيين لدينا.",
    },
    {
      question: "ماهي ساعات العمل؟",
      answer:
        "تبدأ ساعات العمل لدينا من الساعة الثامنة صباحاً حتى الساعة السادسة مساءاً. طيلة أيام الأسبوع، ما عاد يوم الجمعة والأعياد الوطنية والدينية.",
    },
    {
      question: "كيف يمكنكم التواصل معنا؟",
      answer:
        "يمكنكم التواصل معنا بكل سهولة وبساطة من خلال الواتس أب أو أرقامنا في الأسفل.",
    },
    {
      question: "هل هنالك متابعة طبية؟",
      answer:
        "المتابعة الطبية أمر ضروري وواجب لدينا، لمتابعة حالات المرضى كل واحدٍ على حدة، من أجل ضمان سلامة مرضانا وشفاءهم الكُلي بدون أي أضرار جانبية.",
    },
  ];

  return (
    <div className={style.content} id="faq">
      <div className={style.container}>
        <Heading
          topHeading={"الأسئــــلة الشــــائعــة"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          {faq.map((question, index) => (
            <div
              className={`${style.card} `}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className={style.title}>
                <div className={style.question}>
                  <h2>{question.question}</h2>
                </div>
                <div className={style.icon}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="var(--blue)"
                    width={40}
                    height={40}
                    className={`${showAnswer === index ? 'active' : ''}`}
                  >
                    <path
                      d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm1.91,26.48c0,2.51,0,5,0,7.54a1.91,1.91,0,0,1-3.81.09c0-1.31,0-2.63,0-3.95V26.92H22.5c-2.52,0-5,0-7.54,0a1.91,1.91,0,1,1,.11-3.81h8v-.54c0-2.53,0-5.06,0-7.58a1.91,1.91,0,1,1,3.81.08v8h.57c2.52,0,5,0,7.54,0a1.9,1.9,0,0,1,1.82,2.61A1.93,1.93,0,0,1,35,26.92h-8Z"
                      transform="translate(-1 -1)"
                    />
                  </svg>
                </div>
              </div>
              {showAnswer === index && (
                <div className={`${style.answer} card_fb5`}>
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
