import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// imports from app
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {MenuComponent} from "./component/menu/menu.component";


const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', loadChildren: './home/home.module#HomeModule'},
	{path: 'login', loadChildren: './login/login.module#LoginModule'},
	{path: '404', component: NotfoundComponent},
	{path: '**', redirectTo: '404'},

];

@NgModule( {
	imports: [
		BrowserModule,
		RouterModule.forRoot( routes )
	],
	declarations: [ AppComponent, NotfoundComponent, MenuComponent ],
	providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}