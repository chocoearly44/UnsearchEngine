import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IconsModule} from "./icons/icons.module";
import {SearchComponent} from './pages/search/search.component';
import {QueryComponent} from './components/query/query.component';
import {ResultComponent} from './components/result/result.component';
import {NotfoundComponent} from './components/notfound/notfound.component';

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		SearchComponent,
		QueryComponent,
		ResultComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		IconsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
