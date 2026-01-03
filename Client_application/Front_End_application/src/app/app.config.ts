import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
/** 
 * Problemc: 1. Missing provideHttpClient in appConfig providers.
 * WHy is this important?: 
 * WHne I was doing registration, the HttpClient service was not available,
 * It was me the follwing error in the console: NullInjectorError: No provider for HttpClient!
 * 
 * Solution:
 * provideHttpClient() to make HttpClient available application-wide
 * 
 * 
 * 
 * 
 *  **/
export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes), provideZoneChangeDetection() ,provideHttpClient()],
  
};
