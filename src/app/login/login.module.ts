import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import { SharedModule } from '../commons/shared/shared.module';


const routes: Routes = [
	{path: '', component: LoginComponent}
];

@NgModule( {
	imports: [
		// Material Design Modules
		MatInputModule,
		MatButtonModule,

		// Other modules
		RouterModule.forChild( routes ),
		SharedModule
	],
	declarations: [ LoginComponent ]
} )
export class LoginModule {

}