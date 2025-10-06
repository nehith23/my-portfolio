import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export default function StaggerContainer({
  children,
  staggerDelay = 0.15,
  className = "",
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30,
          filter: "blur(6px)"
        },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
