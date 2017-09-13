/****** Created by shivani gajjar(shivani.gajjar@kahunasystems.com) 13/9/17 2:05 PM*******/
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule]
})
export class SharedModule {

}
