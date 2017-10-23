import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// imports from app
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
	{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
	{path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
	{path: 'login', loadChildren: './login/login.module#LoginModule'}
];

@NgModule( {
	imports: [
		BrowserModule,
		RouterModule.forRoot( routes, {initialNavigation: 'legacy_disabled'} )
	],
	declarations: [ AppComponent, MenuComponent ],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: '/ng4'
		}
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}