import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: 'type-2.component.html'
})

export class ItLayoutType2Component {
	constructor() { }

	items = [
		{ link: 'https://www.aol.com', label: 'Crumb 1', icon: 'star-outline' },
		{ link: 'https://www.yahoo.com', label: 'Crumb 2', icon: 'star-outline' },
		{ link: 'https://www.bing.com', label: 'Crumb 3', icon: 'star-outline' },
	  ];
	
}