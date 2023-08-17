import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';
import { LinkSortPipe } from './link-sort.pipe';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TranslateStore } from '@ngx-translate/core';
import { DesignAngularKitModule } from '../../projects/design-angular-kit/src/lib/design-angular-kit.module';
import { ItBreadcrumbComponent } from 'projects/design-angular-kit/src/public_api';
import { ItHeadersModule } from 'projects/design-angular-kit/src/lib/components/navigation/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    RouterDispatcherComponent,
    LinkSortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DesignAngularKitModule,
	ItHeadersModule,
	ItBreadcrumbComponent,
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
