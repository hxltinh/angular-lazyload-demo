import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "contact", pathMatch: "full" },
  { path: 'contact', loadChildren: '../contact/contact.module#ContactModule' },
  { path: 'crisis', loadChildren: '../crisis/crisis.module#CrisisModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule {}
