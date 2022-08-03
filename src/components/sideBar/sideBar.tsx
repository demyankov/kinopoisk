import { SideBarWrapper, Ul } from "./sidePanelstyles";
import logo from "../images/pixema.svg";
import iconHome from "../images/icon_home.svg";
import iconTrends from "../images/icon_trends.svg";
import iconFavorites from "../images/icon_favorites.svg";
import iconSettings from "../images/icon_settings.svg";

export function SideBar(): JSX.Element {
  const sideBar = [
    { icon: iconHome, text: "Home", alt: "icon Home", href: "", id: 1 },
    { icon: iconTrends, text: "Trends", alt: "icon Trends", href: "", id: 2 },
    {
      icon: iconFavorites,
      text: "Favorites",
      alt: "icon Favorites",
      href: "",
      id: 3,
    },
    {
      icon: iconSettings,
      text: "Settings",
      alt: "icon Settings",
      href: "",
      id: 4,
    },
  ];

  return (
    <SideBarWrapper>
      <img src={logo} alt="Logotype Pixema" />
      <Ul>
        {sideBar.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href}>
                <img src={link.icon} alt={link.alt} /> {link.text}
              </a>
            </li>
          );
        })}
      </Ul>
    </SideBarWrapper>
  );
}
