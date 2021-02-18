import React, { FC } from 'react';
import Link from 'next/link';

const NavigationItem: FC<{ name: string; route: string }> = ({
  name,
  route,
}) => {
  return (
    <li>
      <Link href={route}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default NavigationItem;
