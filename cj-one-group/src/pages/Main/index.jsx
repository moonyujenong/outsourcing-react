import style from "./index.module.css";
import Layouts from "../../comoon/components/Layouts";
import visualImg from "../../assets/images/main/main-visual-img.png";
import Slides from "./Slides";

function Main () {
  return (
    <Layouts>
      <div className={style.container}>
        <section className={style.first_section}>
          <p>CJONE is a Korean cuisine-focused restaurant brand that originated in the UK. We leverage our extensive experience and expertise to deliver the authentic taste and charm of our dishes in diverse ways.</p>
          <img alt="visual img" src={visualImg} />
        </section>
        <div className={style.vision}>
          <h3 className={style.title}>BRAND VISION</h3>
          <div className={style.vision_text}>
            <p>CJONE aims to introduce the authenticity of Asian cuisine, especially Korean food, to the world. The brand emphasizes its core values of True, Consistent, and Empathetic to build trust with customers, enhance customer experience, and foster genuine relationships.</p>
            <p>Moreover, CJONE strives for sustainable growth that benefits not only the brand but also its customers and the broader community. The vision is to pursue continuous innovation and uphold a people-centered culture while showcasing the unique charm of Korean and Asian cuisine globally.</p>
          </div>
        </div>

        <Slides />
      </div>
    </Layouts>
  )
}

export default Main;