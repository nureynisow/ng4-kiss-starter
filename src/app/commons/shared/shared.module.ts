import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


/**
 * All shared directive, modules, and components
 */
@NgModule( {
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		TranslateModule
	],
	exports: [ TranslateModule, ReactiveFormsModule ]
} )
export class SharedModule {
	static forRoot (): ModuleWithProviders {
		return {ngModule: SharedModule};
	}
}