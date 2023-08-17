import { Component } from '@angular/core';
import { ItMenuConfig } from 'projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface';
const { version: appVersion } = require('../../package.json')

@Component({
  selector: 'it-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-angular-kit-doc';
  version = appVersion;


  mainNavigation: ItMenuConfig = {
	type: 'navbar',
	label: 'it.navigation.main-navigation',
	items: [
		{
			type: 'link',
			label: 'Link 1',
			link: '#'
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

  secondaryNavigation: ItMenuConfig = {
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

  socialNavigation: ItMenuConfig = {
	type: 'icon-list',
	items: [
		{
			type: 'icon',
			icon: 'facebook',
			label: 'Facebook',
			link: '#'
		},
		{
			type: 'icon',
			icon: 'github',
			label: 'Github',
			link: '#'
		},
		{
			type: 'icon',
			icon: 'instagram',
			label: 'Instagram',
			link: '#'
		}
	]
  };
}
