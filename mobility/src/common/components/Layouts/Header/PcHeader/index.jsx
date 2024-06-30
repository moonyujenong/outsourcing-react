import style from "./index.module.css";
import Logo from "images/common/logo.svg";
import Global from "images/common/icon-global.svg";
import { menuList } from "../menu";
import { useState } from "react";

function PcHeader () {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const handleOpenLang = () => {
    setIsOpenLang(!isOpenLang);
  }

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <img alt="로고" src={Logo} />
        <div className={style.right_box}>
          <div className={style.menu_box}>
            {menuList.map(item => (
              <a href={item.link} key={item.id} className={style.link_menu}>
                {item.name}
              </a>
            ))}
          </div>
          <button className={style.lang} type="button" onClick={handleOpenLang}>
            <img alt="언어" src={Global} className={style.global} />
            <div className={`${style.lang_box} ${isOpenLang ? style.open : ""}`}>
              {/* TODO : 선택한 언어에 클래스 active 추가 */}
              <span className={style.active}>KR</span>
              <span>EN</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PcHeader;