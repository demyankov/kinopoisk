import { SideBarLink, SideBarWrapper, Ul } from "./sideBarStyles";
import { SideBarType } from "../../generalData/sideBarList";
import { SecondaryP } from "../styles/secondaryP";
import { useSelector } from "react-redux";
import { sideBarSelector } from "../../store/sideBar/sideBar.selector";
import { useAppDispatch } from "../../store/rootStore";
import { sideBarAction } from "../../store/sideBar/sideBar.slice";

export function SideBar({ links }: { links: Array<SideBarType> }): JSX.Element {
  const isOpened = useSelector(sideBarSelector);
  const dispatch = useAppDispatch();

  return (
    <SideBarWrapper isOpened={isOpened}>
      <Ul>
        {links.map((link) => {
          let Icon = link.icon;
          return (
            <li key={link.id}>
              <SideBarLink
                to={link.href}
                onClick={() => {
                  dispatch(sideBarAction.toggleSideBar());
                }}
              >
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
