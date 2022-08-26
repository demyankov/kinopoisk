import { SideBarLink, SideBarWrapper, Ul } from "./sideBarStyles";
import { SideBarType } from "../../generalData/sideBarList";
import { SecondaryP } from "../styles/secondaryP";

export function SideBar({ links }: { links: Array<SideBarType> }): JSX.Element {
  return (
    <SideBarWrapper>
      <Ul>
        {links.map((link) => {
          let Icon = link.icon;
          return (
            <li key={link.id}>
              <SideBarLink to={link.href}>
                <>
                  <Icon></Icon>
                  {link.text}
                </>
              </SideBarLink>
            </li>
          );
        })}
      </Ul>
      <SecondaryP>© All Rights Reserved</SecondaryP>
    </SideBarWrapper>
  );
}
