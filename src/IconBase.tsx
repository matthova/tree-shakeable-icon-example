import React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
  color?: string;
}
export type IconType = (props: IconProps) => JSX.Element;

export interface IconBaseProps extends IconProps {
  children: JSX.Element;
}

export function IconBase(props: IconBaseProps): JSX.Element {
  const { children, ...svgProps } = props;
  const size = props.size || "1em";
  const color = props.color ?? "pink";

  return React.cloneElement(children, {
    ...children.props,
    ...svgProps,
    width: size,
    height: size,
    color,
  });
}
