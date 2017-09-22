/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 21/9/17 4:12 PM*******/
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [SharedModule,AdminRoutingModule],
  declarations: [DashboardComponent]
})
export class AdminModule {

}
