import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// console.log(process, process.env.NODE_ENV, process.env.api);
if ( process.env.NODE_ENV !== 'development' ) {
	enableProdMode();
}

export function main () {
	platformBrowserDynamic().bootstrapModule( AppModule );
}

if ( document.readyState === 'complete' ) {
	main();
} else {
	document.addEventListener( 'DOMContentLoaded', main );
}
