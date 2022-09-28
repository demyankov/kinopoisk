import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { setPassword, SetPasswordType } from "../../api/setPassword";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { SuccessfulMessage } from "../../components/styles/successfulMessage";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { useAppDispatch } from "../../store/rootStore";
import { appRebootThemeAction } from "../../store/theme/appRebootThemeAction";
import { appSaveThemeAction } from "../../store/theme/appSaveThemeAction";
import { themeSelector } from "../../store/theme/theme.selector";
import { themeActions } from "../../store/theme/theme.slice";
import {
  ButtonWrapper,
  FilterForm,
  SettingsItem,
  SettingsItemWrapper,
  SettingsSubItem,
  Theme,
  ThemeSwitcher,
} from "./settingsPageStyles";

export function SettingsPage(): JSX.Element {
  const user = useSelector(signInUserSelector);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);
  const [error, setError] = useState<SetPasswordType>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isThemeLoading, setIsThemeLoading] = useState<boolean>(false);
  const theme = useSelector(themeSelector);
  const dispatch = useAppDispatch();
  const refSwitcher = useRef<HTMLInputElement>(null);

  const clearPasswordField = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <FilterForm>
      <SettingsItemWrapper>
        <h3>Profile</h3>
        <SettingsItem>
          <Input
            id="name"
            label="Name"
            placeholder="Your name"
            defaultValue={user?.username}
            readOnly
          />
          <Input
            id="email"
            label="Email"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
          />
        </SettingsItem>
      </SettingsItemWrapper>
      {isPasswordChanged ? (
        <SuccessfulMessage>
          The password has been successfully changed
        </SuccessfulMessage>
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
            errorPosition="static"
            onChange={({ currentTarget: { value } }) =>
              setCurrentPassword(value)
            }
          />
          <SettingsSubItem>
            <Input
              id="newPassword"
              label="New password"
              placeholder="New password"
              autoComplete="off"
              type="password"
              value={newPassword}
              onChange={({ currentTarget: { value } }) => setNewPassword(value)}
            />
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
            />
          </SettingsSubItem>
        </SettingsItem>
      </SettingsItemWrapper>

      <SettingsItemWrapper>
        <h3>Color mode</h3>
        <SettingsItem>
          <div>
            <h5>{theme}</h5>
            <Theme>Use {theme} theme</Theme>
          </div>
          <ThemeSwitcher>
            <input
              defaultChecked={theme === "Light"}
              id="themeSwitcher"
              type="checkbox"
              ref={refSwitcher}
              onClick={() => {
                setTimeout(() => {
                  dispatch(themeActions.toggleTheme());
                  setIsThemeLoading(false);
                }, 500);
              }}
            />
            <label htmlFor="themeSwitcher"></label>
          </ThemeSwitcher>
        </SettingsItem>
      </SettingsItemWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            clearPasswordField();
            dispatch(appRebootThemeAction(refSwitcher));
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            appSaveThemeAction();
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
                .then(() => {
                  setIsLoading(false);
                  setIsPasswordChanged(true);
                  setError({});
                })
                .catch((error) => {
                  setIsLoading(false);
                  setIsPasswordChanged(false);
                  setError(JSON.parse(error.request.responseText));
                });
            } else if (
              !currentPassword &&
              (newPassword || confirmNewPassword)
            ) {
              setError((prev) => ({
                ...prev,
                current_password: "Enter a current password",
              }));
            } else if (
              currentPassword &&
              newPassword &&
              newPassword !== confirmNewPassword
            ) {
              setError({
                current_password: "",
                new_password: "Confirm password is not valid",
              });
            } else if (currentPassword && !newPassword) {
              setError({
                new_password: "Enter a new password",
              });
            } else {
              setError((prev) => ({
                ...prev,
                current_password: "",
                new_password: "",
              }));
            }
          }}
        >
          Save
        </Button>
      </ButtonWrapper>
      {/* Server Error 500 */}
      {/* <Button
        onClick={() =>
          deleteUser(user.id).then((response) =>
            console.log("Пользователь удален:", response)
          )
        }
      >
        Delete User
      </Button> */}
    </FilterForm>
  );
}
