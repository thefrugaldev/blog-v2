import Link from 'next/link';
import React, { FC } from 'react';

const HeaderItem: FC<{ name: string; route: string }> = ({ name, route }) => {
  return (
    <li>
      <Link href={`${route}`}>
        <a>
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default HeaderItem;
