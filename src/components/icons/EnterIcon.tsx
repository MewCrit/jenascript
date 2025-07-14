import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#000';
export const EnterIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
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
    <path d="M5 12h10" />
    <path d="M15 12v6" />
    <path d="M13 16l2 2" />
    <path d="M17 16l-2 2" />
  </svg>
);
