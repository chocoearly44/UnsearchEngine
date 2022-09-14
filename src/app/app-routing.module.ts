import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {SearchComponent} from "./pages/search/search.component";

const routes: Routes = [
	{path: 'unsearch', component: SearchComponent},
	{path: '', component: HomepageComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
