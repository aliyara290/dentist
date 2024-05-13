import style from "@/styles/home/team.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.heading}>
          <div>شركاءك في الرعاية</div>
          <div>الصحية السنية</div>
        </div>
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.pic}>
                    <Image 
                    src={'/images/team/01.jpg'}
                    alt="pic"
                    width={240}
                    height={300}
                    />
                </div>
                <div className={style.details}>
                    <h3>محمد العوادي</h3>
                    <span>جامعة المجمعة للعلوم الطبية</span>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.pic}>
                    <Image 
                    src={'/images/team/02.jpg'}
                    alt="pic"
                    width={240}
                    height={300}
                    />
                </div>
                <div className={style.details}>
                    <h3>عبد الله الجمالي</h3>
                    <span>جامعة جازان للعلوم الطبية</span>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.pic}>
                    <Image 
                    src={'/images/team/03.jpg'}
                    alt="pic"
                    width={240}
                    height={300}
                    />
                </div>
                <div className={style.details}>
                    <h3>يوسف الخضيري </h3>
                    <span>جامعة الباحة للعلوم الطبية</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
