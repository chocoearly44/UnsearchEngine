import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

import {Search} from "../../entities/search";

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	constructor(private httpClient: HttpClient) {
	}

	googleQuery(query: string): Observable<Search> {
		let finalQuery: string = query + "+-" + query;

		return this.httpClient
			.get<Search>(
				`https://google-search3.p.rapidapi.com/api/v1/search/q=${finalQuery}`,
				{
					headers: {
						"X-RapidAPI-Key": environment.apiKey
					}
				}
			);
	}
}
