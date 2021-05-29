import Link from "next/link";
import React, { FC } from "react";

const HeaderItem: FC<{ name: string; route: string }> = ({ name, route }) => {
  return (
    <Link href={`${route}`}>
      <a>
        <span>{name}</span>
      </a>
    </Link>
  );
};

export default HeaderItem;
