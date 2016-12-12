import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const routes: Routes = [
    {path: "", component: CrisisListComponent},
    {path: 'item/:id', component: CrisisDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export default class CrisisRoutingModule { }