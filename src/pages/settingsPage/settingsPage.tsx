import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import {
  ButtonWrapper,
  SettingsItem,
  SettingsItemWrapper,
  SettingsSubItem,
  ThemeSwitcher,
} from "./setingsPageStyles";

export function SettingsPage(): JSX.Element {
  return (
    <form>
      <SettingsItemWrapper>
        <h3>Profile</h3>
        <SettingsItem>
          <Input id="name" label="Name" placeholder="Your name"></Input>
          <Input id="email" label="Email" placeholder="Your Email"></Input>
        </SettingsItem>
      </SettingsItemWrapper>

      <SettingsItemWrapper>
        <h3>Password</h3>
        <SettingsItem>
          <Input
            id="password"
            label="Password"
            placeholder="Your password"
            autoComplete="off"
            type="password"
          ></Input>
          <SettingsSubItem>
            <Input
              id="newPassword"
              label="New password"
              placeholder="New password"
              autoComplete="off"
              type="password"
            ></Input>
            <Input
              id="confirmPassword"
              label="Confirm password"
              placeholder="Confirm password"
              autoComplete="off"
              type="password"
            ></Input>
          </SettingsSubItem>
        </SettingsItem>
      </SettingsItemWrapper>

      <SettingsItemWrapper>
        <h3>Color mode</h3>
        <SettingsItem>
          <div>
            <h5>Dark</h5>
            <p>Use dark theme</p>
          </div>
          <ThemeSwitcher>
            <input id="themeSwitcher" type="checkbox" />
            <label htmlFor="themeSwitcher"></label>
          </ThemeSwitcher>
        </SettingsItem>
      </SettingsItemWrapper>
      <ButtonWrapper>
        <Button onClick={() => console.log("Cancel")}>Cancel</Button>
        <Button onClick={() => console.log("Save")}>Save</Button>
      </ButtonWrapper>
    </form>
  );
}
