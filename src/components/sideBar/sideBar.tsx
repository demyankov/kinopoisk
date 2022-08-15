import { SideBarLink, SideBarWrapper, Ul } from "./sideBarStyles";
import logo from "../images/pixema.svg";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../enums/AppRoute";
import { SideBarType } from "../../generalData/sideBarList";

export function SideBar({ links }: { links: Array<SideBarType> }): JSX.Element {
  const navigate = useNavigate();

  return (
    <SideBarWrapper>
      <img
        src={logo}
        alt="Logotype Pixema"
        onClick={() => navigate(AppRoute.Main)}
      />
      <Ul>
        {links.map((link) => {
          return (
            <SideBarLink to={link.href} key={link.id}>
              <>
                {link.icon}
                {link.text}
              </>
            </SideBarLink>
          );
        })}
      </Ul>
    </SideBarWrapper>
  );
}
