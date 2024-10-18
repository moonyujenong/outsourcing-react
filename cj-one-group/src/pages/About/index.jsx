import style from "./index.module.css";
import Layouts from '../../comoon/components/Layouts';
import visualImg from "../../assets/images/about/visual-banner-mobile.png";
import visualImgPc from "../../assets/images/about/visual-banner-pc.png";
import useResponsive from "../../comoon/hook/Responsive";
import visualImgTest from "../../assets/images/about/about-visual-banner.png";
import missionImg1 from "../../assets/images/about/mission-img-1.png";
import missionImg2 from "../../assets/images/about/mission-img-2.png";
import missionImg2Mobile from "../../assets/images/about/mission-img-2-mobile.png";
import guidelineMobile from "../../assets/images/about/logo-guideline-mobile.png";
import guidelinePc from "../../assets/images/about/logo-guideline-pc.png";
import lineBannerMobile from "../../assets/images/about/line-banner-mobile.png";
import lineBannerPc from "../../assets/images/about/line-banner-pc.png";
import taglineImg1 from "../../assets/images/about/tagline-img-1.png";
import taglineImg2 from "../../assets/images/about/tagline-img-2.png";
import taglineImg3 from "../../assets/images/about/tagline-img-3.png";

function About () {
    const innerWidth = useResponsive();
    const bannerTextList = [
        {
            id:0,
            title:'True',
            explain:`CJONE always strives to communicate\nwith customers with honesty and sincerity.`
        },
        {
            id:1,
            title:'Consistent',
            explain:`Our brand maintains consistent standards\nacross all locations.`
        },
        {
            id:2,
            title:'Empathetic',
            explain:`Empathy with customers reflects our\npeople-centered values.`
        }
    ]

    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    {/* <img alt="visual img" src={innerWidth >= 1024 ? visualImgPc : visualImg} /> */}
                    <img alt="visual img" src={visualImgTest} />
                    <div className={style.text_box}>
                        {bannerTextList.map((item) => (
                            <div className={style.item} key={item.id}>
                                <h3 className={style.title}>{item.title}</h3>
                                <p>{item.explain}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.mission_section}>
                    <h3 className={style.title}>BRAND MISSION</h3>
                    <p className={style.sub}>We capture the essence of cuisine to offer our customers delicious memories and unique experiences. Grounded in trust and dedication, we provide rich cultural experiences and create moments that leave a lasting impression in the memories of our customers.</p>
                    <div className={style.flex_box}>
                        <img alt="mission img 1" src={missionImg1} />
                        <img alt="mission img 2" src={innerWidth >= 1024 ? missionImg2 : missionImg2Mobile} />
                    </div>
                </div>
                <div className={style.guide_line}>
                    <img alt="logo guide line img" src={innerWidth >= 1024 ? guidelinePc:guidelineMobile} />
                </div>

                <img style={{width:'100%', display:'block'}} alt="line banner" src={innerWidth >= 1024 ? lineBannerPc:lineBannerMobile} />

                <div className={style.tagline_section}>
                    <div className={style.img_wrap}>
                        <span>
                            <p>BRAND TAGLINE</p>
                            <img alt="tagline img 1" src={taglineImg1} />
                        </span>
                        <span>
                            <p>Stories In Every Flavor,</p>
                            <img alt="tagline img 2" src={taglineImg2} />
                        </span>
                        <span>
                            <p>Memories In Every Bite</p>
                            <img alt="tagline img 3" src={taglineImg3} />
                        </span>
                    </div>
                    <h3 className={style.title}>BRAND TAGLINE</h3>
                    <p>Stories in Every Flavor,<br />Memories in Every Bite</p>
                </div>
            </div>
        </Layouts>
    )
}

export default About;