import AppWrapper from 'AppWrapper';
import { apiClient } from 'api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { ChainlitContext } from '@chainlit/react-client';

import './index.css';

import { i18nSetupLocalization } from './i18n';

i18nSetupLocalization();

// 暴露 React 和 ReactDOM 为全局变量，供自定义脚本使用
(window as any).React = React;
(window as any).ReactDOM = ReactDOM;
(window as any).ReactDOMClient = ReactDOM;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </ChainlitContext.Provider>
  </React.StrictMode>
);
