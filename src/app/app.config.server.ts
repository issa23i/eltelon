import {
  mergeApplicationConfig,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { UNIVERSAL_PROVIDERS } from '@ng-web-apis/universal';

const universalProviders = makeEnvironmentProviders(UNIVERSAL_PROVIDERS);

const serverConfig = mergeApplicationConfig(
  {
    providers: [provideServerRendering(withRoutes(serverRoutes))],
  },
  {
    providers: [universalProviders],
  }
);

export const config = mergeApplicationConfig(appConfig, serverConfig);
