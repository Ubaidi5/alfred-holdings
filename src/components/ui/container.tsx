import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <section
      className={cn(
        "w-full px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Container;
