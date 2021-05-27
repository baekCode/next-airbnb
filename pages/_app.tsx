import React from 'react';
import {AppProps} from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';

export default function ({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  );
}