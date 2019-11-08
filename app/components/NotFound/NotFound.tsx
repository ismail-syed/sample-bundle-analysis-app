import * as React from 'react';

import {useI18n} from '@shopify/react-i18n';
import {Page, EmptyState} from '@shopify/polaris';
import {Status, StatusCode} from '@shopify/react-network';
import {PerformanceMark} from '@shopify/react-performance';

import {emptyStateIllustration} from './illustrations';

export default function NotFound() {
  const [i18n] = useI18n();

  return (
    <>
      <Status code={StatusCode.NotFound} />
      <Page title="">
        <EmptyState
          heading={i18n.translate('title')}
          image={emptyStateIllustration}
          action={{content: i18n.translate('action'), url: '/'}}
        >
          <p>{i18n.translate('tip')}</p>
        </EmptyState>
      </Page>
      <PerformanceMark stage="complete" id="NotFound" />
    </>
  );
}
