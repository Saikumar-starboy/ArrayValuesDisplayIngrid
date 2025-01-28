import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//Default Module file name we need to specify in this main.ts 
//here appModule is the default module of our angular project.
//we must specify the default module name here.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
