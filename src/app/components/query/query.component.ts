import {Component, Input} from '@angular/core';
import {SearchService} from "../../services/search/search.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-query',
	templateUrl: './query.component.html',
})
export class QueryComponent {
	@Input() query = '';

	constructor(private searchService: SearchService, private router: Router) {
	}

	search(query: string): void {
		let rawQuery: string[] = query.split(" ");
		let assembledQuery: string = '';

		rawQuery.forEach((str) => {
			assembledQuery += str;

			if (rawQuery[rawQuery.length - 1] != str) {
				assembledQuery += "+";
			}
		});

		this.router.navigate(
			['/unsearch'], {
				queryParams: {
					q: assembledQuery,
				},
			})

		this.searchService.googleQuery(query).subscribe(search => {
			console.log(search);
		});
	}
}
