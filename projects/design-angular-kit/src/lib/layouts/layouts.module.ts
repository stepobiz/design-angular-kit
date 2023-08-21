import { NgModule } from '@angular/core';
import { ItLayoutType1Component } from './type-1/type-1.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ItHeaderComponent } from '../../public_api';
import { ItFooterComponent } from '../components/navigation/footer/footer.component';

import { TableOfContentComponent } from './_tmp/table-of-content/table-of-content.component';
import { TableOfContentItemComponent } from './_tmp/table-of-content-item/table-of-content-item.component';
import { LinkSortPipe } from './_tmp/link-sort.pipe';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ItHeaderComponent,
		ItFooterComponent,

	],
	providers: [

	],
	declarations: [
		LinkSortPipe,					//TMP
		TableOfContentComponent,		//TMP
    	TableOfContentItemComponent, 	//TMP

		ItLayoutType1Component,
	],
	exports: [

	],
})
export class ItLayoutModule { }
