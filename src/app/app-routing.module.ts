/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 5/9/17 12:21 PM*******/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [{path: 'home', component: AppComponent}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
