import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
	selector: 'kiss-login',
	templateUrl: './login.component.html',
	styleUrls: [ 'login.component.scss' ]
} )
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;

	constructor ( private fb: FormBuilder, private router: Router ) {
	}

	ngOnInit (): void {
		this.loginForm = this.fb.group( {
			'login': [ null, [ Validators.required ] ],
			'password': [ null, [ Validators.required ] ]
		} );
	}

	submitLoginForm (): void {
		// console.log( this.loginForm.value );
		this.router.navigate( [ '/home' ] );
	}
}