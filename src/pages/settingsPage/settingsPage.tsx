import { Input } from "../../components/input/input";
import {
  SettingsItem,
  SettingsItemWrapper,
  SettingsSubItem,
  ThemeSwitcher,
} from "./setingsPageStyles";

export function SettingsPage(): JSX.Element {
  return (
    <>
      <SettingsItemWrapper>
        <h3>Profile</h3>
        <SettingsItem>
          <Input label="Name" placeholder="Your name"></Input>
          <Input label="Email" placeholder="Your Email"></Input>
        </SettingsItem>
      </SettingsItemWrapper>

      <SettingsItemWrapper>
        <h3>Password</h3>
        <SettingsItem>
          <Input label="Password" placeholder="Your password"></Input>
          <SettingsSubItem>
            <Input label="New password" placeholder="New password"></Input>
            <Input
              label="Confirm password"
              placeholder="Confirm password"
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
            <input id="s1" type="checkbox" />
            <label htmlFor="s1"></label>
          </ThemeSwitcher>
        </SettingsItem>
      </SettingsItemWrapper>
    </>
  );
}
