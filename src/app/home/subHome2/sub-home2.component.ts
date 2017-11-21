import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
	selector: 'kiss-home2',
	templateUrl: './sub-home2.component.html',
	styleUrls: [ 'sub-home2.component.scss' ]
} )
export class SubHome2 implements OnInit {

	public supplierForm: FormGroup;
	public selectedTab: string = 'presentation';

	constructor ( private fb: FormBuilder ) {
	}

	ngOnInit (): void {
		this.supplierForm = this.fb.group( {
			'name': [ null, [ Validators.required ] ],
			'description': [ null, [ Validators.required ] ],
			'legalName': [ null, [ Validators.required ] ],
			'natId': [ null, [ Validators.required ] ],
			'tag': [ null, [ Validators.required ] ]
		} );
	}

	goToAnchor ( id: string ) {
		this.selectedTab = id;
		document.querySelector( '#' + id ).scrollIntoView();
	}
}
