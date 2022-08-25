export interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  password?: boolean;
  error?: string;
  justifyContent?: string;
  errorPosition?: string;
}
