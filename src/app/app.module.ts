import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// imports from app
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './commons/shared/shared.module';


const routes: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'home', loadChildren: './home/home.module#HomeModule'},
	{path: 'login', loadChildren: './login/login.module#LoginModule'},
	{path: '404', component: NotfoundComponent},
	{path: '**', redirectTo: '404'},

];

export function HttpLoaderFactory ( http: HttpClient ) {
	return new TranslateHttpLoader( http, './translations/', '.json' );
}

@NgModule( {
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		RouterModule.forRoot( routes ),
		TranslateModule.forRoot( {
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		} ),
		SharedModule.forRoot()
	],
	declarations: [ AppComponent, NotfoundComponent ],
	providers: [
		{provide: LOCALE_ID, useValue: 'fr-FR'},
		{provide: APP_BASE_HREF, useValue: '/'}
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}