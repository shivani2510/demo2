/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 13/9/17 4:24 PM*******/
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DefaultBaseComponent} from './base/default-base.component';
import {HeaderComponent} from './component/header/header.component';
import {LayoutRoutingModule} from './layout-routing.module';

@NgModule({
  imports: [SharedModule, LayoutRoutingModule],
  declarations: [DefaultBaseComponent, HeaderComponent],
  exports: [DefaultBaseComponent, HeaderComponent]
})
export class LayoutModule {

}
