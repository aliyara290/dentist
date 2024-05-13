import style from '@/styles/home/hero.module.css'


const Hero = () => {
    return ( 
        <div className={style.content}>
            <div className={style.container}>
                <div className={style.body}>
                    <div>الثقـــــــة و الآمـــــــــان</div>
                    <div>أســــــــــــــــــــــــــــــاس </div>
                    <div>علاقتنـــــا معـــكــــــــم</div>
                    <div className={style.btn}>
                        <a href="tel:0643569435">إتصــــل بنــــا</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;