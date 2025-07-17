import React from "react";

const Button: React.FC<{ className?: string; title: string; action: () => void }> = ({ className, title, action }) => (
    <div className={className}>
        <button className="primary" onClick={action}>
            {title}
        </button>
    </div>
);

export default Button;
