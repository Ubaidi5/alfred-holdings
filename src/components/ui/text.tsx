import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "default";
}

const textVariant = cva(
  "text-foreground text-sm leading-[21px] md:text-base md:leading-[26px]",
  {
    variants: {
      as: {
        default: "",
      },
    },
    defaultVariants: {
      as: "default",
    },
  }
);

const Text: React.FC<TextProps> = (props) => {
  const { children, className, as } = props;

  return (
    <p {...props} className={cn(textVariant({ as, className }))}>
      {children}
    </p>
  );
};

export default Text;
