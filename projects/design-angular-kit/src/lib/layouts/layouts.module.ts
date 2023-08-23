import { NgModule } from '@angular/core';
import { ItLayoutType1Component } from './type-1/type-1.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ItBreadcrumbComponent, ItChipComponent, ItHeaderComponent } from '../../public_api';
import { ItFooterComponent } from '../components/navigation/footer/footer.component';

import { TableOfContentComponent } from './_tmp/table-of-content/table-of-content.component';
import { TableOfContentItemComponent } from './_tmp/table-of-content-item/table-of-content-item.component';
import { LinkSortPipe } from './_tmp/link-sort.pipe';
import { ItLayoutType2Component } from './type-2/type-2.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ItHeaderComponent,
		ItFooterComponent,
		ItBreadcrumbComponent,
		ItChipComponent,

	],
	providers: [

	],
	declarations: [
		LinkSortPipe,					//TMP
		TableOfContentComponent,		//TMP
    	TableOfContentItemComponent, 	//TMP

		ItLayoutType1Component,
		ItLayoutType2Component,
		
	],
	exports: [
		ItLayoutType1Component,
		ItLayoutType2Component,

	],
})
export class ItLayoutModule { }
