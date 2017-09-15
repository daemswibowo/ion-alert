import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dl-alert',
  template: `
	<ion-toolbar [color]="color" no-padding class="alert {{color}}" *ngIf="!hide">
		<ion-list no-lines>
			<ion-item text-wrap>
				<ion-icon *ngIf="icon" [name]="icon" [ios]="ios" [md]="md" item-start ></ion-icon>
				<p><ng-content></ng-content></p>
				<button *ngIf="close" (click)="handleClick($event)" ion-button clear icon-only item-end color="dark"><ion-icon name="close"></ion-icon></button>
			</ion-item>
		</ion-list>
	</ion-toolbar>
  `
})
export class DlAlert {
	@Input() color: string;
	@Input() icon: string;
	@Input() ios: string;
	@Input() md: string;
	@Input() closeButton: boolean;
	@Input() hide: boolean = false;
	@Output() closeClicked = new EventEmitter();

	constructor() {
	}

	/**
	 * handle close click
	 * @param {[type]} event [description]
	 */
	handleClick (event) {
		this.hide = true;
		this.closeClicked.emit(event);
	}
}
