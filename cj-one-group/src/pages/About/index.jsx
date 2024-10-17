import style from "./index.module.css";
import Layouts from '../../comoon/components/Layouts';
import visualImg from "../../assets/images/about/visual-banner-mobile.png";
import visualImgPc from "../../assets/images/about/visual-banner-pc.png";
import useResponsive from "../../comoon/hook/Responsive";
import visualImgTest from "../../assets/images/about/about-visual-banner.png";
import missionImg1 from "../../assets/images/about/mission-img-1.png";
import missionImg2 from "../../assets/images/about/mission-img-2.png";
import missionImg2Mobile from "../../assets/images/about/mission-img-2-mobile.png";

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
            </div>
        </Layouts>
    )
}

export default About;