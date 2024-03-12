import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.641 33.429L11.563 27.351C7.26395 23.0519 0 26.0909 0 32.1689V40.1H35.2821V15.788L17.641 33.429Z" fill="#54FD04"/>
    <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="#DC4F30"/>
    </Svg>
  );
};

export default Icon;
