import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component( {
	selector: 'kiss-app',
	templateUrl: './app.component.html'
} )
export class AppComponent {
	constructor ( private translateService: TranslateService ) {

		// i18n config TODO check ADP/AIE for loading from local storage
		translateService.setDefaultLang( 'fr-FR' );
		translateService.use( 'fr-FR' );
	}
}