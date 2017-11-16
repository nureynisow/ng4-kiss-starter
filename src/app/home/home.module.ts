import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { MenuComponent } from '../components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../commons/shared/shared.module';
import { CommonModule } from '@angular/common';
import {SubHome2} from './subHome2/sub-home2.component';
import {SubHome1} from './subHome1/sub-home1.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: SubHome1
			},
			{
				path: 'menu2',
				component: SubHome2
			}
		]
	}
];

@NgModule( {
	imports: [
		// Material Design Modules
		MatButtonModule,
		MatInputModule,
		MatListModule,
		MatToolbarModule,
		MatTabsModule,

		FlexLayoutModule,
		// Other modules
		FormsModule,
		CommonModule,
		SharedModule,

		RouterModule.forChild( routes )
	],
	declarations: [ HomeComponent, MenuComponent, SubHome1, SubHome2 ]
} )
export class HomeModule {

}