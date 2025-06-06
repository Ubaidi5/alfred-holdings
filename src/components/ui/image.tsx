import React from "react";
import NextImage, { ImageProps } from "next/image";

const Image: React.FC<ImageProps> = (props) => {
  const {
    src,
    alt,
    placeholder,
    width = 640,
    height = 640,
    fill,
    ...rest
  } = props;
  return (
    <NextImage
      {...rest}
      src={src}
      alt={alt || "Avinash Babur"}
      title={alt}
      placeholder={typeof src === "object" ? "blur" : placeholder}
      {...(fill
        ? { fill: true }
        : {
            width: width,
            height: height,
          })}
    />
  );
};

export default Image;
