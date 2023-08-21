import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TranslateStore } from '@ngx-translate/core';
import { ItLayoutModule } from 'projects/design-angular-kit/src/lib/layouts/layouts.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/lib/design-angular-kit.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterDispatcherComponent, // INUTILE
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DesignAngularKitModule,
	ItLayoutModule,
  ],
  providers: [
    TranslateStore,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          HTML: () => import('highlight.js/lib/languages/xml'),
          scss: () => import('highlight.js/lib/languages/scss')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
