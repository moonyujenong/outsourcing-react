import style from "./index.module.css";
import Layouts from "../../common/components/Layouts";
import BannerSection from "./BannerSection";
import IntroduceSection from "./IntroduceSection";

function Home () {
  return (
    <Layouts>
      <div className={style.container}>
        <BannerSection />
        <IntroduceSection />
      </div>
    </Layouts>
  )
}

export default Home;