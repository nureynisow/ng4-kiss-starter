import { Component, Input, OnInit } from '@angular/core';

@Component( {
	selector: 'kiss-button',
	templateUrl: './button.component.html',
	styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent implements OnInit {
	@Input() text: string = '';
	@Input() classes: string = '';
	@Input() textColor: string = '#58585a';
	@Input() bgColor: string = '';
	@Input() borderColor: string = '';
	@Input() faIcon: string = '';

	public _classes: string[];
	public _style: {};

	ngOnInit () {
		this._classes = [ 'kiss-btn' ];
		this._classes = this._classes.concat( this.classes.split( ' ' ) );
		this._style = {
			'color': this.textColor,
			'background-color': this.bgColor,
			'border-color': this.bgColor !== '' ? 'transparent' : this.textColor,
		};
		if ( this.faIcon ) {
			this.text = `<i class="fa ${this.faIcon}" aria-hidden="true"></i> ${this.text}`
		}
	}
}