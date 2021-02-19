import React, { FC } from 'react';
import Link from 'next/link';
import * as icons from 'react-feather';

const NavigationItem: FC<{
  name: string;
  route: string;
  icon: string;
}> = ({ name, route, icon }) => {
  const IconComponent = icon.length > 0 && icons[icon];

  return (
    <li>
      <Link href={`${route}`}>
        <a className="flex items-center">
          <IconComponent className="inline" />
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
