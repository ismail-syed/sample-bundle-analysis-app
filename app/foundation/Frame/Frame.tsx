import * as React from 'react';
import {
  Frame as PolarisFrame,
  TopBar,
  ThemeProvider,
  Navigation,
} from '@shopify/polaris';
import {Route} from '@shopify/react-router';

import {logo} from './images';

interface Props {
  children?: React.ReactNode;
}

export default function Frame({children}: Props) {
  const [open, setOpen] = React.useState(false);

  const navigation = (
    <Route
      render={({location}) => (
        <Navigation location={location.pathname}>
          <Navigation.Section
            items={[{label: 'Home', url: '/', exactMatch: true}]}
          />
        </Navigation>
      )}
    />
  );

  const topBar = (
    <TopBar showNavigationToggle onNavigationToggle={() => setOpen(!open)} />
  );

  return (
    <ThemeProvider theme={{logo: {topBarSource: logo}}}>
      <PolarisFrame
        topBar={topBar}
        navigation={navigation}
        showMobileNavigation={open}
        onNavigationDismiss={() => setOpen(false)}
      >
        {children}
      </PolarisFrame>
    </ThemeProvider>
  );
}
