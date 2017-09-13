/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 13/9/17 4:57 PM*******/
import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule],
  declarations: [MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule]
})
export class CustomMaterialModule {
}
