import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


/**
 * All shared directive, modules, and components
 */
@NgModule( {
	imports: [
		TranslateModule,
	],
	exports: [ TranslateModule ]
} )
export class SharedModule {
	static forRoot (): ModuleWithProviders {
		return {ngModule: SharedModule}
	}
}