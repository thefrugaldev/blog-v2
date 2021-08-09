import { Image } from "@chakra-ui/react";
import React, { FC } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
}

const BlogImage: FC<BlogImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} m="25px auto" />;
};

export default BlogImage;
