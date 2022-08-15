import { AppRoute } from "../enums/AppRoute";
import {
  IconHome,
  IconTrends,
  IconFavorites,
  IconSettings,
} from "../components/images/iconComponents";

export interface SideBarType {
  icon: () => JSX.Element;
  text: string;
  href: string;
  id: number;
}

export const sideBar: Array<SideBarType> = [
  {
    icon: IconHome,
    text: "Home",
    href: `${AppRoute.Main}`,
    id: 1,
  },
  {
    icon: IconTrends,
    text: "Trends",
    href: `${AppRoute.Trends}`,
    id: 2,
  },
  {
    icon: IconFavorites,
    text: "Favorites",
    href: `${AppRoute.Favourites}`,
    id: 3,
  },
  {
    icon: IconSettings,
    text: "Settings",
    href: `${AppRoute.Settings}`,
    id: 4,
  },
];
