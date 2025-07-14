import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#000';
export const FlyingPlane = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color ?? defaultButtonColor}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3l9 9l-9 9" />
    <path d="M21 12h-8" />
    <path d="M12 3l-2 8" />
    <path d="M12 3l2 8" />
  </svg>
);
