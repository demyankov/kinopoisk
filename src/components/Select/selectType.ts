export interface SelectType
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  label?: string;
  error?: string;
}
