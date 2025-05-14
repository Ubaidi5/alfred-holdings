import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <section
      className={cn("max-w-[1200px] mx-4 md:mx-auto", className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Container;
