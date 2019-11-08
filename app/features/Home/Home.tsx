import * as React from 'react';
import {PerformanceMark} from '@shopify/react-performance';
import {Page} from '@shopify/polaris';

export default function Home() {
  return (
    <Page title="Home">
      <PerformanceMark stage="complete" id="home" />
    </Page>
  );
}
