import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { bootstrapApplication } from '@angular/platform-browser';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
// Debugging note: The login and register components were not loading.
// Why: Appconfig was not included in the bootstrapApplication providers.

bootstrapApplication(AppComponent, {
  providers: [ appConfig.providers ,provideAnimations(), provideRouter(routes)],
});

