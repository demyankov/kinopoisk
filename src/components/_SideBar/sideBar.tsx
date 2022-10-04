import { SideBarLink, SideBarWrapper, Ul } from "./sideBarStyles";
import { SideBarType } from "../../generalData/sideBarList";
import { SecondaryP } from "../Styles/secondaryP";
import { useSelector } from "react-redux";
import { sideBarSelector } from "../../store/sideBar/sideBar.selector";
import { useAppDispatch } from "../../store/rootStore";
import { sideBarAction } from "../../store/sideBar/sideBar.slice";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import {
  SignLink,
  SignLinkwrapperSideBar,
  UserName,
} from "../Header/headerStyles";
import { exitFromAccount } from "../../store/auth/auth.slice";
import { removeTokensFromLocalStorage } from "../../utils/localStorage";
import { AppRoute } from "../../enums/AppRoute";
import { useNavigate } from "react-router-dom";

export function SideBar({ links }: { links: Array<SideBarType> }): JSX.Element {
  const isOpened = useSelector(sideBarSelector);
  const dispatch = useAppDispatch();
  const user = useSelector(signInUserSelector);
  const navigate = useNavigate();

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
                  dispatch(sideBarAction.sideBarClose());
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
      <SignLinkwrapperSideBar>
        {user.username ? (
          <>
            <UserName>{user.username}</UserName>
            <SignLink
              onClick={() => {
                removeTokensFromLocalStorage();
                dispatch(exitFromAccount());
              }}
            >
              Logout
            </SignLink>
          </>
        ) : (
          <SignLink onClick={() => navigate(AppRoute.Auth)}>SignIn</SignLink>
        )}
      </SignLinkwrapperSideBar>
      <SecondaryP>© All Rights Reserved</SecondaryP>
    </SideBarWrapper>
  );
}
