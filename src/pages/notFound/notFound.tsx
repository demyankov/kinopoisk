import React from "react";
import { useSelector } from "react-redux";
import { Icon404 } from "../../components/Images/IconComponents";
import { themeSelector } from "../../store/theme/theme.selector";
import { Wrapper } from "./notFoundStyles";

function NotFound(): JSX.Element {
  const themeVariant = useSelector(themeSelector);

  return (
    <Wrapper themeVariant={themeVariant}>
      <Icon404></Icon404>
      <h1>PAGE NOT FOUND</h1>
    </Wrapper>
  );
}

export default NotFound;
