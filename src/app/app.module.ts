import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TranslateStore } from '@ngx-translate/core';
import { ItLayoutModule } from 'projects/design-angular-kit/src/lib/layouts/layouts.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/lib/design-angular-kit.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	RouterModule,
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
