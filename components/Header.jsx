import style from '@/styles/header.module.css'
import Image from 'next/image';


const Header = () => {
    return ( 
        <div className={style.content}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image 
                    src={'/images/logo.svg'}
                    alt='logo'
                    width={120}
                    height={120}
                    />
                </div>
                <div className={style.links}>
                    <ul>
                        <li><a href="#services">خدمـاتنا</a></li>
                        <li><a href="#testimonial">أراء العمـلاء</a></li>
                        <li><a href="#team">فريـقنا</a></li>
                        <li><a href="#contact">تواصـل معنـا</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Header;