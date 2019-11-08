import * as React from 'react';
import {hot} from 'react-hot-loader';

import {useAcceptLanguage} from '@shopify/react-network';
import {I18nUniversalProvider} from '@shopify/react-i18n-universal-provider';
import {Router} from '@shopify/react-router';
import Routes from '../Routes';
import Prefetch from '../Prefetch';
import Frame from '../Frame';

import {
  ContentSecurityPolicy,
  Metadata,
  Performance,
  Polaris,
} from './components';

interface Props {
  locale?: string;
  location?: string;
}

function App({location}: Props) {
  const [language] = useAcceptLanguage({code: 'en', quality: 1.0});

  return (
    <>
      <ContentSecurityPolicy />
      <Metadata />
      <Performance>
        <I18nUniversalProvider locale={language.code}>
          <Prefetch />
          <Polaris>
            <Router location={location}>
              <Frame>
                <Routes />
              </Frame>
            </Router>
          </Polaris>
        </I18nUniversalProvider>
      </Performance>
    </>
  );
}

export default hot(module)(App);
