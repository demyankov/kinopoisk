import { Input } from "../input/input";
import { HeaderWrapper, UserName } from "./headerStyles";

export function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <Input id="mainInput" placeholder="Search" />
      <UserName>Demyankov</UserName>
    </HeaderWrapper>
  );
}
