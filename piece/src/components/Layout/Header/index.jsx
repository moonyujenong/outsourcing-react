import style from "./index.module.css";
import MobileHeader from "./MobileHeader";

function Header () {
  return (
    <div className={style.container}>
      <MobileHeader />
    </div>
  )
}

export default Header;