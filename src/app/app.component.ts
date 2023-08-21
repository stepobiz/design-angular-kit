import { Component } from '@angular/core';
const { version: appVersion } = require('../../package.json')
import TableOfContent from '../assets/table-of-content.json';

@Component({
	selector: 'it-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	slimTitle = 'Dipartimento per la Trasformazione Digitale + AgID';
	title = 'design-angular-kit-doc';
	version = appVersion;
	tableOfContent = (<any>TableOfContent).tableOfContent;
	mainNavigation = (<any>TableOfContent).mainNavigation;
	secondaryNavigation = (<any>TableOfContent).secondaryNavigation;
	socialNavigation = (<any>TableOfContent).socialNavigation;

}
