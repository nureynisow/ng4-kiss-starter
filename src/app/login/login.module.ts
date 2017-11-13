import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material';


const routes: Routes = [
	{path: '', component: LoginComponent}
];

@NgModule( {
	imports: [
		MatInputModule,
		RouterModule.forChild( routes )
	],
	declarations: [ LoginComponent ]
} )
export class LoginModule {

}