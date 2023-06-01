/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

//To enable routing in application
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

//start json webserver with json-server --watch db.json to mock data

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(),
      //include routing configuration
      provideRouter(routeConfig)]})
  .catch(err => console.error(err));
