export interface ClassProps {
  className?: string;
}

export interface CheckboxOption {
  value: string;
  text: string;
}

export interface IOption<T extends string | number> {
  value: T;
  content: string;
  href?: string;
}
