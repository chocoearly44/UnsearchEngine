import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../services/search/search.service";
import {Result} from "../../entities/result";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
	results: Array<Result> = new Array<Result>();
	query: string = '';

	isLoaded: boolean = false;

	constructor(private route: ActivatedRoute, private searchService: SearchService) {
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.query = params["q"];
			this.searchService.googleQuery(params["q"]).subscribe(
				search => {
					this.results = search.results;
					this.isLoaded = true;
				},
				error => this.isLoaded = true
			);
		});
	}
}
