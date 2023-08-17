import { Component, OnInit } from '@angular/core';
import { ItMenuConfig } from 'projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface';
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




	mainNavigationEaxample: ItMenuConfig = {
		type: 'navbar',
		label: 'it.navigation.main-navigation',
		items: [
			{
				type: 'link',
				label: 'Info',
				link: '/#/info/welcome'
			},
			{
				type: 'link',
				label: 'Link 2',
				disabled: true,
				link: '#'
			},
			{
				type: 'link',
				label: 'Link 3',
				link: '#'
			},
			{
				type: 'dropdown',
				label: 'Menu Dropdown',
				title: 'Sezione',
				items: [
					{
						type: 'link',
						label: 'Link lista 1',
						link: '#'
					},
					{
						type: 'link',
						label: 'Link lista 2',
						disabled: true,
						link: '#'
					},
					{
						type: 'link',
						label: 'Link lista 3',
						link: '#'
					},
					{
						type: 'divider'
					},
					{
						type: 'link',
						label: 'Link lista 4',
						link: '#'
					}
				]
			},
			{
				type: 'megamenu',
				label: 'Megamenu',
				items: [
					{
						type: 'megamenu-child',
						title: 'Sezione 1',
						items: [
							{
								type: 'link',
								label: 'Link lista 1',
								link: '#'
							},
							{
								type: 'link',
								label: 'Link lista 2',
								disabled: true,
								link: '#'
							},
							{
								type: 'link',
								label: 'Link lista 3',
								link: '#'
							},
							{
								type: 'divider'
							},
							{
								type: 'link',
								label: 'Link lista 4',
								link: '#'
							}
						]
					},
					{
						type: 'megamenu-child',
						title: 'Sezione 2',
						items: [
							{
								type: 'link',
								label: 'Link lista 1',
								link: '#'
							},
							{
								type: 'link',
								label: 'Link lista 2',
								disabled: true,
								link: '#'
							},
							{
								type: 'link',
								label: 'Link lista 3',
								link: '#'
							},
							{
								type: 'divider'
							},
							{
								type: 'link',
								label: 'Link lista 4',
								link: '#'
							}
						]
					},
					{
						type: 'megamenu-child',
						title: 'Sezione 3',
						items: [
							{
								type: 'link',
								label: 'Link lista 1',
								link: '#'
							},
							{
								type: 'link',
								label: 'Link lista 2',
								disabled: true,
								link: '#'
							},
							{
								type: 'link',
								label: 'Link lista 3',
								link: '#'
							},
							{
								type: 'divider'
							},
							{
								type: 'link',
								label: 'Link lista 4',
								link: '#'
							}
						]
					}
				]
			},
		]
	};

	secondaryNavigationEaxample: ItMenuConfig = {
		type: 'link-list',
		label: 'it.navigation.secondary-navigation',
		items: [
			{
				type: 'link',
				label: 'Link 1',
				link: '#'
			},
			{
				type: 'link',
				label: 'Link 2',
				link: '#'
			},
		]
	};

	socialNavigationEaxample: ItMenuConfig = {
		type: 'icon-list',
		items: [
			{
				type: 'icon',
				icon: 'github',
				label: 'Github',
				link: 'https://github.com/italia/design-angular-kit/'
			}
		]
	};
}
