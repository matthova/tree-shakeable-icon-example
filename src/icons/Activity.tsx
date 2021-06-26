import * as React from "react";
import { IconProps, IconBase } from "../IconBase";

function MyComponent(props: React.SVGProps<SVGSVGElement>) {
  return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke={props.color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}


function MyComponentWrapped(props: IconProps) {
  return (
    <IconBase {...props}>
      <MyComponent />
    </IconBase>
  );
}

export default MyComponentWrapped;
