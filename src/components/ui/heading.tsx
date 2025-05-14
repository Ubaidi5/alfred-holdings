import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const headingVariants = cva("w-fit", {
  variants: {
    as: {
      default:
        "text-secondary font-normal text-[32px] leading-10.5 md:text-5xl md:leading-14",
    },
  },
  defaultVariants: {
    as: "default",
  },
});

const Heading: React.FC<HeadingProps> = (props) => {
  const { className, children, variant, ...rest } = props;
  const Comp = variant || "h2";

  return (
    <Comp {...rest} className={cn(headingVariants({ className }))}>
      {children}
    </Comp>
  );
};

export default Heading;
