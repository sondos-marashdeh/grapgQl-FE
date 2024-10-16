import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Correctly provide HttpClient

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(withFetch()) // Provide HttpClient here

  ],
})
.catch((err) => console.error(err));
