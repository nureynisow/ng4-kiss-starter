import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';


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
	declarations: [ ButtonComponent ],
	exports: [ TranslateModule, ReactiveFormsModule, ButtonComponent ]
} )
export class SharedModule {
	static forRoot (): ModuleWithProviders {
		return {ngModule: SharedModule};
	}
}