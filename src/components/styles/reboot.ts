import { css } from "@emotion/react";
import { Breakpoints } from "../../enums/breakpoints";
import { ThemeVariant } from "../../store/theme/theme.slice";
import { SPACING, TYPOGRAPHY, SIDEBARWIDTH, appTheme } from "./variables";

export const getRebootCSS = (themeVariant: ThemeVariant) => css`
  :root {
    --theme-switcher-width: 4rem;

    --bs-font-sans-serif: "Inter", system-ui, -apple-system, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    --max-width: ${Breakpoints.Desktop};

    --font-color-base: ${appTheme[themeVariant].colors.fontBase};
    --font-color-invert: ${appTheme[themeVariant].colors.fontInvert};
    --font-color-second: ${appTheme[themeVariant].colors.fontSecond};
    --font-color-active: ${appTheme[themeVariant].colors.fontActive};
    --font-color-error: ${appTheme[themeVariant].colors.fontError};
    --background-color: ${appTheme[themeVariant].colors.background};
    --background-color-raiting: ${appTheme[themeVariant].colors
      .backgroundRating};
    --background-color-invert: ${appTheme[themeVariant].colors
      .backgroundInvert};
    --background-color-medium: ${appTheme[themeVariant].colors
      .backgroundMedium};
    --background-color-second: ${appTheme[themeVariant].colors
      .backgroundSecond};
    --background-color-bright: ${appTheme[themeVariant].colors
      .backgroundBright};
    --background-color-button-hover: ${appTheme[themeVariant].colors
      .backgroundButtonHover};
    --background-color-disabled: ${appTheme[themeVariant].colors
      .backgroundDisabled};
    --body-font-family: var(--bs-font-sans-serif);
    --body-font-size: ${TYPOGRAPHY.mobile.body.fontSize};
    --body-line-height: ${TYPOGRAPHY.mobile.body.lineHeight};
    --body-font-weight: ${TYPOGRAPHY.mobile.body.fontWeight};
    --headline-1-font-size: ${TYPOGRAPHY.mobile.headline1.fontSize};
    --headline-1-line-height: ${TYPOGRAPHY.mobile.headline1.lineHeight};
    --headline-1-font-weight: ${TYPOGRAPHY.mobile.headline1.fontWeight};
    --headline-2-font-size: ${TYPOGRAPHY.mobile.headline2.fontSize};
    --headline-2-line-height: ${TYPOGRAPHY.mobile.headline2.lineHeight};
    --headline-2-font-weight: ${TYPOGRAPHY.mobile.headline2.fontWeight};
    --subHeadline-1-font-size: ${TYPOGRAPHY.mobile.subHeadline1.fontSize};
    --subHeadline-1-line-height: ${TYPOGRAPHY.mobile.subHeadline1.lineHeight};
    --subHeadline-1-font-weight: ${TYPOGRAPHY.mobile.subHeadline1.fontWeight};
    --subHeadline-2-font-size: ${TYPOGRAPHY.mobile.subHeadline2.fontSize};
    --subHeadline-2-line-height: ${TYPOGRAPHY.mobile.subHeadline2.lineHeight};
    --subHeadline-2-font-weight: ${TYPOGRAPHY.mobile.subHeadline2.fontWeight};
    --subHeadline-3-font-size: ${TYPOGRAPHY.mobile.subHeadline3.fontSize};
    --subHeadline-3-line-height: ${TYPOGRAPHY.mobile.subHeadline3.lineHeight};
    --subHeadline-3-font-weight: ${TYPOGRAPHY.mobile.subHeadline3.fontWeight};
    --spacing-1: ${SPACING.mobile.L1};
    --spacing-2: ${SPACING.mobile.L2};
    --spacing-3: ${SPACING.mobile.L3};
    --spacing-4: ${SPACING.mobile.L4};
    --spacing-5: ${SPACING.mobile.L5};
    --spacing-6: ${SPACING.mobile.L6};
    --spacing-7: ${SPACING.mobile.L7};
    --spacing-8: ${SPACING.mobile.L8};
    --spacing-9: ${SPACING.mobile.L9};
    --spacing-10: ${SPACING.mobile.L10};
    --sideBarWidth: ${SIDEBARWIDTH.desktop};
  }
  @media (min-width: ${Breakpoints.Tablet}) {
    --body-font-size: ${TYPOGRAPHY.tablet.body.fontSize};
    --body-line-height: ${TYPOGRAPHY.tablet.body.lineHeight};
    --body-font-weight: ${TYPOGRAPHY.tablet.body.fontWeight};
    --headline-1-font-size: ${TYPOGRAPHY.tablet.headline1.fontSize};
    --headline-1-line-height: ${TYPOGRAPHY.tablet.headline1.lineHeight};
    --headline-1-font-weight: ${TYPOGRAPHY.tablet.headline1.fontWeight};
    --headline-2-font-size: ${TYPOGRAPHY.tablet.headline2.fontSize};
    --headline-2-line-height: ${TYPOGRAPHY.tablet.headline2.lineHeight};
    --headline-2-font-weight: ${TYPOGRAPHY.tablet.headline2.fontWeight};
    --subHeadline-1-font-size: ${TYPOGRAPHY.tablet.subHeadline1.fontSize};
    --subHeadline-1-line-height: ${TYPOGRAPHY.tablet.subHeadline1.lineHeight};
    --subHeadline-1-font-weight: ${TYPOGRAPHY.tablet.subHeadline1.fontWeight};
    --subHeadline-2-font-size: ${TYPOGRAPHY.tablet.subHeadline2.fontSize};
    --subHeadline-2-line-height: ${TYPOGRAPHY.tablet.subHeadline2.lineHeight};
    --subHeadline-2-font-weight: ${TYPOGRAPHY.tablet.subHeadline2.fontWeight};
    --subHeadline-3-font-size: ${TYPOGRAPHY.tablet.subHeadline3.fontSize};
    --subHeadline-3-line-height: ${TYPOGRAPHY.tablet.subHeadline3.lineHeight};
    --subHeadline-3-font-weight: ${TYPOGRAPHY.tablet.subHeadline3.fontWeight};
    --spacing-1: ${SPACING.tablet.L1};
    --spacing-2: ${SPACING.tablet.L2};
    --spacing-3: ${SPACING.tablet.L3};
    --spacing-4: ${SPACING.tablet.L4};
    --spacing-5: ${SPACING.tablet.L5};
    --spacing-6: ${SPACING.tablet.L6};
    --spacing-7: ${SPACING.tablet.L7};
    --spacing-8: ${SPACING.tablet.L8};
    --spacing-9: ${SPACING.tablet.L9};
    --spacing-10: ${SPACING.tablet.L10};
    --sideBarWidth: ${SIDEBARWIDTH.tablet};
  }
  @media (min-width: ${Breakpoints.Desktop}) {
    --body-font-size: ${TYPOGRAPHY.desktop.body.fontSize};
    --body-line-height: ${TYPOGRAPHY.desktop.body.lineHeight};
    --body-font-weight: ${TYPOGRAPHY.desktop.body.fontWeight};
    --headline-1-font-size: ${TYPOGRAPHY.desktop.headline1.fontSize};
    --headline-1-line-height: ${TYPOGRAPHY.desktop.headline1.lineHeight};
    --headline-1-font-weight: ${TYPOGRAPHY.desktop.headline1.fontWeight};
    --headline-2-font-size: ${TYPOGRAPHY.desktop.headline2.fontSize};
    --headline-2-line-height: ${TYPOGRAPHY.desktop.headline2.lineHeight};
    --headline-2-font-weight: ${TYPOGRAPHY.desktop.headline2.fontWeight};
    --subHeadline-1-font-size: ${TYPOGRAPHY.desktop.subHeadline1.fontSize};
    --subHeadline-1-line-height: ${TYPOGRAPHY.desktop.subHeadline1.lineHeight};
    --subHeadline-1-font-weight: ${TYPOGRAPHY.desktop.subHeadline1.fontWeight};
    --subHeadline-2-font-size: ${TYPOGRAPHY.desktop.subHeadline2.fontSize};
    --subHeadline-2-line-height: ${TYPOGRAPHY.desktop.subHeadline2.lineHeight};
    --subHeadline-2-font-weight: ${TYPOGRAPHY.desktop.subHeadline2.fontWeight};
    --subHeadline-3-font-size: ${TYPOGRAPHY.desktop.subHeadline3.fontSize};
    --subHeadline-3-line-height: ${TYPOGRAPHY.desktop.subHeadline3.lineHeight};
    --subHeadline-3-font-weight: ${TYPOGRAPHY.desktop.subHeadline3.fontWeight};
    --spacing-1: ${SPACING.desktop.L1};
    --spacing-2: ${SPACING.desktop.L2};
    --spacing-3: ${SPACING.desktop.L3};
    --spacing-4: ${SPACING.desktop.L4};
    --spacing-5: ${SPACING.desktop.L5};
    --spacing-6: ${SPACING.desktop.L6};
    --spacing-7: ${SPACING.desktop.L7};
    --spacing-8: ${SPACING.desktop.L8};
    --spacing-9: ${SPACING.desktop.L9};
    --spacing-10: ${SPACING.desktop.L10};
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }
  html {
    min-height: 100vh;
  }

  body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    /* background-color: var(--bs-color-bg);
      color: var(--bs-color-text); */
    font-family: var(--body-font-family);
    font-size: var(--body-font-size);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);
    height: 100%;
    margin: 0;
  }
  hr {
    margin: var(--spacing-7) 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }
  hr:not([size]) {
    height: 1px;
  }
  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    margin: 0;
    padding: 0;
    font-size: var(--subheadline-3-font-size);
    font-weight: var(--subheadline-3-font-weight);
    line-height: var(--subheadline-3-line-height);
    color: var(--font-color-base);
  }
  h1 {
    font-size: var(--headline-1-font-size);
    font-weight: var(--headline-1-font-weight);
    line-height: var(--headline-1-line-height);
  }
  h2 {
    font-size: var(--headline-1-font-size);
    font-weight: var(--headline-1-font-weight);
    line-height: var(--headline-1-line-height);
  }

  h3 {
    font-size: var(--headline-2-font-size);
    font-weight: var(--headline-2-font-weight);
    line-height: var(--headline-2-line-height);
  }

  h4 {
    font-size: var(--subheadline-1-font-size);
    font-weight: var(--subheadline-1-font-weight);
    line-height: var(--subheadline-1-line-height);
  }

  h5 {
    font-size: var(--subheadline-2-font-size);
    font-weight: var(--subheadline-2-font-weight);
    line-height: var(--subheadline-2-line-height);
  }

  p {
    margin: 0;
    font-size: var(--body-font-size);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);
  }

  div,
  label,
  input,
  select,
  option,
  button {
    color: var(--font-color-base);
  }

  input {
    border: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }
  ol,
  ul {
    padding: 0;
  }
  ol,
  ul,
  dl {
    margin-left: 0;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  blockquote {
    margin: 0 0 1rem;
  }
  b,
  strong {
    font-weight: bolder;
  }
  small {
    font-size: 0.875em;
  }
  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }
  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  a {
    text-decoration: none;
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  pre,
  code,
  kbd,
  samp {
    font-family: var(--font-monospace);
    font-size: 1em;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
  }
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }
  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }
  a > code {
    color: inherit;
  }
  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }
  figure {
    margin: 0 0 1rem;
  }
  img,
  svg {
    vertical-align: middle;
  }
  table {
    caption-side: bottom;
    border-collapse: collapse;
  }
  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }
  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }
  label {
    display: inline-block;
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  button,
  select {
    text-transform: none;
  }

  [role="button"] {
    cursor: pointer;
  }
  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }
  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
  }
  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }
  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }
  legend + * {
    clear: left;
  }
  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }
  ::-webkit-inner-spin-button {
    height: auto;
  }
  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-file-upload-button {
    font: inherit;
  }
  ::file-selector-button {
    font: inherit;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  output {
    display: inline-block;
  }
  iframe {
    border: 0;
  }
  summary {
    display: list-item;
    cursor: pointer;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden] {
    display: none !important;
  }
`;
