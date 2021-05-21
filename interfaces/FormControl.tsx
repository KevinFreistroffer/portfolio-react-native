export interface FormControl {
  id: string;
  placeholder: string;
  value: string;
  error: string | JSX.Element | undefined;
  type: string;
}
