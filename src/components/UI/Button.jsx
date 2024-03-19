
import { clsx } from 'clsx';

const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(  
        "",
        {
          "bg-[#19191C] text-white" : variant === "black",
          "border bg-transparent text-black": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;