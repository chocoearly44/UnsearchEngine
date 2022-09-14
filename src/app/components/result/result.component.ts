import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})
export class ResultComponent {
	@Input() link = '';
	@Input() title = '';
	@Input() description = '';

	constructor() {
	}
}
