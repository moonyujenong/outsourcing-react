import style from "./index.module.css";
import Layouts from "../../common/components/Layouts";
import BannerSection from "./BannerSection";

function Home () {
  return (
    <Layouts>
      <div className={style.container}>
        <BannerSection />
      </div>
    </Layouts>
  )
}

export default Home;