import 'reflect-metadata';
import 'core-js';
import 'es6-promise';
import 'zone.js/dist/zone';

if ( process.env.ENV === 'production' ) {

} else {
	Error[ 'stackTraceLimit' ] = Infinity;
	require( 'zone.js/dist/long-stack-trace-zone' );
}