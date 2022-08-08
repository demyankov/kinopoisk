import { SideBarLink, SideBarWrapper, Ul } from "./sideBarStyles";
import logo from "../images/pixema.svg";
import { SideBarType } from "../images/iconComponents";

export function SideBar({ links }: { links: Array<SideBarType> }): JSX.Element {
  return (
    <SideBarWrapper>
      <img src={logo} alt="Logotype Pixema" />
      <Ul>
        {links.map((link) => {
          return (
            <SideBarLink to={link.href} key={link.id}>
              {link.icon}
              {link.text}
            </SideBarLink>
          );
        })}
      </Ul>
    </SideBarWrapper>
  );
}
