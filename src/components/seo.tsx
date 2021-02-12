import React, { FC } from 'react';
import Head from 'next/head';
import config from '../config';

const SEO: FC<{ description: string; title: string; image: string }> = ({
  description,
  title,
  image,
}) => {
  const metaImage = image || config.social.defaultLogo;
  const metaDescription = description || config.description;
  const defaultTitle = config.title;

  return (
    <Head>
      <title>{`${title} | ${defaultTitle}`}</title>
      <meta name="robots" content="follow, index" />
      <meta content={metaDescription} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
    </Head>
  );
};

export default SEO;
