import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {IntercepteurService} from "./Services/intercepteur.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true }
    , provideAnimationsAsync()]
};
