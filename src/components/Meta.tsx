import { FC } from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { AppConfig } from '../config/AppConfig';

interface MetaInterface {
  keyValue: string;
  title?: string;
  description?: string;
  canonical?: string;
}

export const Meta: FC<MetaInterface> = ({
  keyValue,
  title,
  description,
  canonical,
}) => {
  return (
    <>
      <Head key={keyValue}>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={title || AppConfig.defaultTitle}
        description={description || AppConfig.defaultDescription}
        canonical={canonical}
        openGraph={{
          title: title || AppConfig.defaultTitle,
          description: description || AppConfig.defaultDescription,
          url: canonical,
          site_name: AppConfig.siteName,
        }}
      />
    </>
  );
};
