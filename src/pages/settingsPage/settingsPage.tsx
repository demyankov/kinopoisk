import { useState } from "react";
import { useSelector } from "react-redux";
import { setPassword, SetPasswordType } from "../../api/setPassword";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { SuccessfullMessage } from "../../components/styles/successfullMessage";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import {
  ButtonWrapper,
  SettingsItem,
  SettingsItemWrapper,
  SettingsSubItem,
  Theme,
  ThemeSwitcher,
} from "./setingsPageStyles";

export function SettingsPage(): JSX.Element {
  const user = useSelector(signInUserSelector);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);
  const [error, setError] = useState<SetPasswordType>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(isPasswordChanged);
  return (
    <form>
      <SettingsItemWrapper>
        <h3>Profile</h3>
        <SettingsItem>
          <Input
            id="name"
            label="Name"
            placeholder="Your name"
            defaultValue={user?.username}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Your Email"
            defaultValue={user?.email}
          />
        </SettingsItem>
      </SettingsItemWrapper>
      {isPasswordChanged ? (
        <SuccessfullMessage>
          The password has been successfully changed
        </SuccessfullMessage>
      ) : null}
      <SettingsItemWrapper>
        <h3>Password</h3>

        <SettingsItem>
          <Input
            id="password"
            label="Password"
            placeholder="Your password"
            autoComplete="off"
            type="password"
            value={currentPassword}
            error={error?.current_password}
            onChange={({ currentTarget: { value } }) =>
              setCurrentPassword(value)
            }
          ></Input>
          <SettingsSubItem>
            <Input
              id="newPassword"
              label="New password"
              placeholder="New password"
              autoComplete="off"
              type="password"
              value={newPassword}
              onChange={({ currentTarget: { value } }) => setNewPassword(value)}
            ></Input>
            <Input
              id="confirmPassword"
              label="Confirm password"
              placeholder="Confirm password"
              autoComplete="off"
              type="password"
              value={confirmNewPassword}
              error={error?.new_password}
              errorPosition="static"
              onChange={({ currentTarget: { value } }) =>
                setConfirmNewPassword(value)
              }
            ></Input>
          </SettingsSubItem>
        </SettingsItem>
      </SettingsItemWrapper>

      <SettingsItemWrapper>
        <h3>Color mode</h3>
        <SettingsItem>
          <div>
            <h5>Dark</h5>
            <Theme>Use dark theme</Theme>
          </div>
          <ThemeSwitcher>
            <input id="themeSwitcher" type="checkbox" />
            <label htmlFor="themeSwitcher"></label>
          </ThemeSwitcher>
        </SettingsItem>
      </SettingsItemWrapper>
      <ButtonWrapper>
        <Button>Cancel</Button>
        <Button
          onClick={() => {
            if (
              !isLoading &&
              currentPassword &&
              newPassword &&
              newPassword === confirmNewPassword
            ) {
              setIsLoading(true);
              setPassword({
                new_password: newPassword,
                current_password: currentPassword,
              })
                .then((response) => {
                  setIsLoading(false);
                  setIsPasswordChanged(true);
                  setError({});
                })
                .catch((error) => {
                  setIsLoading(false);
                  setIsPasswordChanged(false);
                  setError(JSON.parse(error.request.responseText));
                });
            }
          }}
        >
          Save
        </Button>
      </ButtonWrapper>
    </form>
  );
}
