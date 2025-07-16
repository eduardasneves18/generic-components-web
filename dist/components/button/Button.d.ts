import React from "react";
import './Button.css';
declare const Button: React.FC<{
    className?: string;
    title: string;
    action: () => void;
}>;
export default Button;
