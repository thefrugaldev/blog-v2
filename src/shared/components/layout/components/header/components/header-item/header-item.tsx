import Link from "next/link";
import React, { FC } from "react";

interface HeaderItemProps {
  name: string;
  route: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ name, route }) => {
  return (
    <Link href={`${route}`}>
      <a>
        <span>{name}</span>
      </a>
    </Link>
  );
};

export default HeaderItem;
