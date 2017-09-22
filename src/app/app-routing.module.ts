/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 5/9/17 12:21 PM*******/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';

const appRoutes: Routes = [{path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
