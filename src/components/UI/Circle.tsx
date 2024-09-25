import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Iprops extends ComponentPropsWithoutRef<"div"> {
  className: string;
  children: ReactNode;
  animate?: boolean;
}
function Circle({ className, children, animate = false }: Iprops) {
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full   relative ",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge(
          "outline outline-[6px] inset-0 rounded-full -outline-offset-[6px] absolute outline-fuchsia-500/10",
          animate && " border-[6px] border-transparent border-t-fuchsia-500/30"
        )}
      ></motion.div>
      {children}
    </div>
  );
}

export default Circle;
