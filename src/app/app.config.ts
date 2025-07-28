import { provideEventPlugins } from '@taiga-ui/event-plugins';
// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideZoneChangeDetection,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { routes } from './el-telon/el-telon.routes';
import {
  TUI_LANGUAGE,
  TUI_SPANISH_LANGUAGE,
  tuiLanguageSwitcher,
} from '@taiga-ui/i18n';
import { of } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    tuiLanguageSwitcher(async () => {
      return import('@taiga-ui/i18n/languages/spanish');
    }),
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_SPANISH_LANGUAGE),
    },
    provideRouter(routes),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideEventPlugins(),
  ],
};
