import * as React from 'react';
import {
  DefaultSource,
  StyleSource,
  ScriptSource,
  ImageSource,
  SpecialSource,
} from '@shopify/react-network';

export default function ContentSecurityPolicy() {
  const developmentAssetSources =
    // eslint-disable-next-line no-process-env
    process.env.NODE_ENV === 'production' ? [] : ['http://localhost:8080'];

  return (
    <>
      <DefaultSource
        sources={[SpecialSource.Self, 'https://*', ...developmentAssetSources]}
      />
      <ScriptSource
        sources={[
          SpecialSource.Self,
          // Need eval in dev for React Hot Loader
          SpecialSource.UnsafeEval,
          'https://*',
          ...developmentAssetSources,
        ]}
      />
      <ImageSource
        sources={[
          SpecialSource.Self,
          SpecialSource.Data,
          ...developmentAssetSources,
        ]}
      />
      <StyleSource
        sources={[
          SpecialSource.UnsafeInline,
          SpecialSource.Blob,
          ...developmentAssetSources,
        ]}
      />
    </>
  );
}
