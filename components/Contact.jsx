import style from "@/styles/contact.module.css";

const Contact = () => {
  return (
    <div className={style.content} id="contact">
      <div className={style.container}>
        <div className={style.card}>
          <h1>إستشــــرنـــــا</h1>
          <span>أحصل على إستشارة مجانية من طرف أمهر الخبراء..</span>
          <form action="">
            <div className={style.row}>
              <input type="text" placeholder="إسمك" required/>
            </div>
            <div className={style.row}>
              <input type="text" placeholder="رقم هاتفك" required/>
            </div>
            <div className={style.row}>
              <textarea name="message" id="message" placeholder="رسالتك..." required></textarea>
            </div>
            <div className={style.btn}>
              <button type="submit">إرسال</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
