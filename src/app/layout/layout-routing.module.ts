/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 13/9/17 5:05 PM*******/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = []

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
