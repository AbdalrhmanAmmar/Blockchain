import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children?: ReactNode;
}
function CutCornerButton({ className }: IButton) {
  return (
    <button
      className={twMerge(
        "bg-fuchsia-500/20 py-2 px-4 font-extrabold font-heading text-sm tracking-wide relative",
        className
      )}
    >
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 masking "></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 text-fuchsia-500"
      >
        <path
          d="M0 1H12.2667L23 11.7333V24"
          stroke="currentColor"
          stroke-width="2"
        ></path>
      </svg>
      <span className="leading-6">GET STARTED</span>
    </button>
  );
}

export default CutCornerButton;
