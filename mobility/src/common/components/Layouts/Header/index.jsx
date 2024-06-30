import "./index.scss";
import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";
import { useCalWindowWidth } from "common/hooks";

function Header () {
  const windowWidth = useCalWindowWidth();

  return (
    <div className="container">
      {windowWidth > 992 ? <PcHeader /> : <MobileHeader />}
    </div>
  )
}

export default Header;