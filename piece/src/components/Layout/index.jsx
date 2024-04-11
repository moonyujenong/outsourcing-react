import style from "./index.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function Layout({children}) {
  return (
    <div className={style.layout}>
      <Header />
      <Body className={style.body}>{children}</Body>
      <Footer />
    </div>
  )
}

export default Layout