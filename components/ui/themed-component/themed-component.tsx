import * as React from "react";

export type ThemedComponentProps = {
  className: string;
  children: (React.ReactElement<any> | string)[];
};

export function ThemedComponent({ children, className }: ThemedComponentProps) {
  return <div className={className}>{children}</div>;
}
