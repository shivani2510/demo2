/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 13/9/17 5:05 PM*******/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultBaseComponent} from './base/default-base.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DefaultBaseComponent,
    children: [
      {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
